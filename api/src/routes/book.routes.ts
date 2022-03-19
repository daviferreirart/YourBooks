import express from 'express';
import BooksServices from "../services/bookServices";


const app = express()

app.get('/books/author/:name', async (req, res) => {
  const { name } = req.params
  const livros = await BooksServices.getAllBooksWithAuthorName(name)
  return res.status(200).json(livros)
})

app.get('/books/isbn/:isbn', async (req, res) => {
  const { isbn } = req.params
  const isbnLivro = await BooksServices.getBookByISBN(isbn)
  return res.status(200).json(isbnLivro)
})

app.get('/books/title/:title', async (req, res) => {
  const { title } = req.params

  const titleResult = await BooksServices.getBookByTitle(title)

  res.status(200).json(titleResult)
})

export default app