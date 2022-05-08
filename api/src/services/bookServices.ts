import axios from "axios";
import AppError from "../error/AppError";
import { inspect } from "util";

type BookData = {
  title: string;
  authors: string[];
  publishedYear: number;
  thumbnail: string;
  link: string;
  isbn: string;
};

export default abstract class BooksServices {
  public static async getAllBooksWithAuthorName(
    author: string
  ): Promise<BookData[]> {
    try {
      const { data } = await axios.get<{ items: any[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`
      );
      const books: BookData[] = data.items.map((item) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        publishedYear: new Date(item.volumeInfo.publishedDate).getFullYear(),
        thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? "",
        link: item.volumeInfo.infoLink,
        isbn: item.volumeInfo.industryIdentifiers[0].identifier,
      }));

      return books;
    } catch (error) {
      throw new AppError("Erro ao buscar o livro pelo nome do Autor");
    }
  }

  public static async getBookByISBN(isbn: string) {
    try {
      const { data } = await axios.get<{ items: any[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
      );
      const books: BookData[] = data.items.map((item) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        publishedYear: new Date(item.volumeInfo.publishedDate).getFullYear(),
        thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? "",
        link: item.volumeInfo.infoLink,
        isbn: item.volumeInfo.industryIdentifiers[0].identifier,
      }));
      return books[0];
    } catch (error) {
      throw new AppError("Erro ao buscar o livro pelo ISBN");
    }
  }
  public static async getBookByTitle(title: string): Promise<BookData[]> {
    try {
      const { data } = await axios.get<{ items: any[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`
      );

      const books: BookData[] = data.items.map((item) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        publishedYear: new Date(item.volumeInfo.publishedDate).getFullYear(),
        thumbnail: item.volumeInfo.imageLinks?.thumbnail ?? "",
        link: item.volumeInfo.infoLink,
        isbn: item.volumeInfo.industryIdentifiers[0].identifier
      }))
      return books;
    } catch (error) {
      console.log(error);
      throw new AppError("Erro ao buscar o livro pelo titulo");
    }
  }
}
