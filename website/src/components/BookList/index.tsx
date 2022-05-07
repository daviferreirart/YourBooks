import { Box } from "@material-ui/core";
import { Card } from "./style";

type BookData = {
  title: string;
  authors: string[];
  publishedYear: string;
  thumbnail: string;
  link: string;
};

export const BookList: React.FC<{ books: BookData[] }> = ({ books }) => {
  return (
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
            </div>
          </Card>
        );
      })}
    </Box>
  );
};
