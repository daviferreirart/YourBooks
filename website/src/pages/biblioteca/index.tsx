import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { BookList } from "../../components/BookList";
import { api } from "../../services/api";

interface BibliotecaProps {
  books: {
    id: string;
    isbn: string;
    user: string;
    title: string;
    authors: string[];
    publishedYear: string;
    thumbnail: string;
    link: string;
  }[];
}

const Biblioteca: React.FC<BibliotecaProps> = ({ books }) => {
  return (
    <BookList
      books={books.map((book) => ({
        authors: book.authors,
        link: book.link,
        publishedYear: book.publishedYear,
        thumbnail: book.thumbnail,
        title: book.title,
      }))}
    />
  );
};

export default Biblioteca;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await getSession({ req });

  console.log(user);
  const { data } = await api.get(`/favorites/${user.email}`);

  return {
    props: {
      books: data,
    },
  };
};
