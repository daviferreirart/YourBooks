import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { BookList } from "../../components/BookList";
import { api } from "../../services/api";
import {MdOutlineRemoveCircleOutline} from 'react-icons/md'
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
        isbn: book.isbn,
        id:book.id
      }))}
    />
  );
};

export default Biblioteca;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (session) {
    const { data } = await api.get(`/favorites/${session.user.email}`);
    return {
      props: {
        books: data,
      },
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
    props: {},
  };
};
