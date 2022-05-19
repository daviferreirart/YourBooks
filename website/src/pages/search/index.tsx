import { Button, TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { BookList } from "../../components/BookList";
import { api } from "../../services/api";
import { Container } from "../../styles/search";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const [livros, setLivros] = useState<BookData[]>([]);

  type BookData = {
    title: string;
    authors: string[];
    publishedYear: string;
    thumbnail: string;
    link: string;
    isbn: string;
    id:string;
  };

  const handleSearch = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const { data } = await api.get(`/books/title/${search}`);
      console.log(data);
      setLivros(data);
    } catch (err) {
      toast(err.response.data.message);
    }
  };
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        type={"text"}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        variant="outlined"
        label={"Pesquisar"}
        color="primary"
      />
      <Button type="submit" variant="contained" onClick={handleSearch}>
        Pesquisar pelo titulo
      </Button>
      <BookList books={livros} />
    </Container>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
export default Search;
