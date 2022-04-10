import React, { useState } from "react";
import {
  Container,
  Title,
  NavLinks,
  Ancora,
  Content,
  Menu,
  CloseSidebar,
  ContentTitle,
  SubTitle,
} from "./style";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import Home from "../login";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/app/search",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSiderbar = () => setSidebar(!sidebar);

  function activeLink(path) {
    return asPath === `/${path}` ? "active" : "";
  }

  function handleSignin() {
    signIn("google");
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>Your Books</Title>
          <SubTitle>Sua biblioteca virtual</SubTitle>
        </ContentTitle>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}>
            <FaTimes />
          </CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink("")} onClick={showSiderbar}>
              Página inicial
            </Ancora>
          </Link>
          <Link href="login">
            <Ancora onClick={Home}>
              Login
            </Ancora>
          </Link>
          <Link href="biblioteca">
            <Ancora className={activeLink("biblioteca")} onClick={showSiderbar}>
              Minha biblioteca
            </Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  );
}
