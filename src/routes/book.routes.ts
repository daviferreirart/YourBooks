import express from 'express';
import BooksServices from "../services/bookServices";


const app = express()

app.get('/books/author', async (req, res) => {
    const { nome } = req.body
    const livros = await BooksServices.getAllBooksWithAuthorName(nome)
    return res.status(200).json(livros)
})

app.get('/books/isbn', async (req, res) => {
    const { isbn } = req.body
    const isbnLivro = await BooksServices.getBookByISBN(isbn)
    return res.status(200).json(isbnLivro)
})

app.get('/books/title', async (req, res) => {
    const { title } = req.body

    const titleResult = await BooksServices.getBookByTitle(title)

    res.status(200).json(titleResult)
})

export default app