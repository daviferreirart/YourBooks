import React, { FormEvent, useState } from 'react';
import { api } from '../../services/api';
//import { Container } from './_styles';

const Search: React.FC = () => {
  const [search, setSearch] = useState('')
  const [livros, setLivros] = useState([])


  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()
    const { data } = await api.get(`/books/isbn/${search}`)
    console.log(data)
  }
  return (
    <div>
      <form>

        <input type={'text'} value={search} onChange={(event) => setSearch(event.target.value)} />
        <button type="submit" onClick={handleSearch}>Pesquisar</button>

      </form>
    </div>
  )
}

export default Search;