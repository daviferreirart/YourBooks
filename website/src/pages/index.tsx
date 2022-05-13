import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../styles/indexStyle'
import Link from 'next/link'
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Bem-vindo a sua biblioteca virtual</Name>
        <Intro>Utilize o YourBooks para montar a sua lista de livros, pesquisar titulos, 
          ver informações sobre as edições e encontrar novas leituras!
        </Intro>
        <Link href="/search">
          <LinkProjects>Pesquisar livro pelo titulo <FaArrowRight /></LinkProjects>
        </Link>

        <Link href="/searchAuthor">
          <LinkProjects>Pesquisar livro pelo autor <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo 2.svg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}


// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };