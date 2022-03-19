import { Box, Button, Card, TextField } from '@material-ui/core';
import { Stack, Paper } from '@mui/material'
import React, { FormEvent, useState } from 'react';
import { api } from '../../../services/api';
import { Container } from '../../../styles/search';

const Search: React.FC = () => {
  const [search, setSearch] = useState('')
  const [livros, setLivros] = useState<BookData[]>([])

  type BookData = {
    title: string,
    authors: string[]
    publishedYear: string
    thumbnail: string
  }


  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()
    const { data } = await api.get(`/books/title/${search}`)
    console.log(data)
    setLivros(data)
  }
  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField type={'text'} value={search} onChange={(event) => setSearch(event.target.value)} variant='outlined' label={'Pesquisar'} color='primary' />
      <Button type="submit" variant='contained' onClick={handleSearch}>Pesquisar pelo titulo</Button>
      <Box>
        {livros.map((livro, index) => {
          return (
            <Card key={index}>{livro.title}</Card>
          )
        })}
      </Box>
    </Container>
  )
}

export default Search;