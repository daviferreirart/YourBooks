import { Box, Button, TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { FaBookDead } from "react-icons/fa";
import { api } from "../../services/api";
import { Container, Card } from "../../styles/search";

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
    const { data } = await api.get(`/books/title/${search}`);
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
        Pesquisar pelo titulo
      </Button>
      <Box>
        {livros.map((livro, index) => {
        const autores = livro.authors.length === 1 ? livro.authors[0] : livro.authors.reduce((acc,author,index)=>{
          if (index === livro.authors.length -1){
            return acc+author
          }
          return acc+author+", "
        },"") 

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
    </Container>
  );
};

export default Search;
