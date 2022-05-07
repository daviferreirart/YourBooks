import { Box, Button, TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { BookList } from "../../components/BookList";
import { Card } from "../../components/BookList/style";
import { api } from "../../services/api";
import { Container } from "../../styles/search";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const [livros, setLivros] = useState<BookData[]>([]);

  type BookData = {
    title: string;
    authors: string[];
    publishedYear: string;
    thumbnail: string;
    link: string;
  };

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const { data } = await api.get(`/books/author/${search}`);
    console.log(data);
    setLivros(data);
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
        Pesquisar pelo o autor
      </Button>
      <BookList books={livros}/>
    </Container>
  );
};

export default Search;
