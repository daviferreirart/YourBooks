import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import AppError from "../error/AppError";
import BooksServices from "../services/bookServices";

const app = express();

app.get("/books/author/:name", async (req, res) => {
  const { name } = req.params;
  const livros = await BooksServices.getAllBooksWithAuthorName(name);
  return res.status(200).json(livros);
});

app.get("/books/isbn/:isbn", async (req, res) => {
  const { isbn } = req.params;
  const isbnLivro = await BooksServices.getBookByISBN(isbn);
  return res.status(200).json(isbnLivro);
});

app.get("/books/title/:title", async (req, res) => {
  const { title } = req.params;

  const titleResult = await BooksServices.getBookByTitle(title);

  res.status(200).json(titleResult);
});

app.post("/favorites", async (req, res) => {
  const prisma = new PrismaClient();
  const { isbn, user } = req.body;

  const bookAlreadyFavorited = await prisma.favorites.findFirst({
    where: {
      isbn,
      AND: {
        user,
      },
    },
  });

  const isbnIsValid = (await BooksServices.getBookByISBN(isbn)).isbn;

  if (!bookAlreadyFavorited && isbnIsValid) {
    await prisma.favorites.create({
      data: {
        isbn,
        user,
      },
    });
    return res.status(201).send();
  }
  
  throw new AppError("Livro já favoritado!");
});

app.delete("/favorites/:id", async (req, res) => {
  const prisma = new PrismaClient();

  const { id } = req.params;

  await prisma.favorites.delete({
    where: {
      id,
    },
  });

  return res.status(204).send();
});

app.get("/favorites/:email", async (req, res) => {
  const prisma = new PrismaClient();

  const { email } = req.params;
  const favorites = await prisma.favorites.findMany({
    where: {
      user: email,
    },
  });

  const data = await Promise.all(
    favorites.map(async (favorite) => {
      const book = await BooksServices.getBookByISBN(favorite.isbn);
      return {
        ...favorite,
        ...book,
      };
    })
  );
  return res.status(200).json(data);
});

export default app;
