import { Box } from "@material-ui/core";
import { Card } from "./style";
import { GrFavorite } from "react-icons/gr";
import { useCallback } from "react";
import { api } from "../../services/api";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

type BookData = {
  title: string;
  authors: string[];
  publishedYear: string;
  thumbnail: string;
  link: string;
  isbn: string;
  id: string;
};

export const BookList: React.FC<{ books: BookData[] }> = ({ books }) => {
  const handleFavorite = useCallback(async (isbn: string) => {
    try {
      const { user } = await getSession();
      const resp = await api.post("/favorites", { isbn, user: user.email });
      if (resp.status === 201) {
        return toast("Adicionado aos favoritos !");
      }
    } catch (err) {
      return toast(err.response.data.message);
    }
  }, []);
  const handleDelete = useCallback(async (id: string) => {
    try {
      const resp = await api.delete(`/favorites/${id}`);
      if (resp.status === 204) {
        return toast("Livro removido dos favoritos!");
      }
    } catch (error) {
      return toast(error.response.data.message);
    }
  }, []);

  return (
    <>
      <Box>
        {books.map((livro, index) => {
          const autores =
            livro.authors === undefined
              ? livro.authors
              : livro.authors.reduce((acc, author, index) => {
                  if (index === livro.authors.length - 1) {
                    return acc + author;
                  }
                  return acc + author + ", ";
                }, "");

          return (
            <Card key={index}>
              <a href={livro.link} target="_blank" rel="noreferrer">
                <img
                  src={livro.thumbnail ? livro.thumbnail : "images/illegal.png"}
                />
              </a>
              <div>
                <span>Titulo: {livro.title}</span>
                <span>Autores: {autores}</span>
                <span>Publicação: {livro.publishedYear}</span>
                <GrFavorite
                  color={"#f134fd"}
                  onClick={() => handleFavorite(livro.isbn)}
                />
                <MdOutlineRemoveCircleOutline
                  onClick={() => handleDelete(livro.id)}
                />
              </div>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
