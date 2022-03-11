import axios from "axios";
import AppError from "../error/AppError";

export default abstract class BooksServices {
    public static async getAllBooksWithAuthorName(author: string) {
        try {
            const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:' + `${author}`)
            return books.data
        } catch (error) {
            throw new AppError('Erro ao buscar o livro pelo nome do Autor')
        }
    }


    public static async getBookByISBN(isbn:string){
        try {
            const books = await axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + `${isbn}`)
            return books.data
        } catch (error) {
            throw new AppError('Erro ao buscar o livro pelo ISBN')
        }
    }
}