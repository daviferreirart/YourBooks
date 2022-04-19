import React, { useEffect, useState } from "react";
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
import { GetServerSideProps, NextPage } from "next";
import {signIn } from "next-auth/react";
import Home from "../../pages/login";


const Header: React.FC = () => {

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
       <Menu>
         <FaBars onClick={showSiderbar}/>
       </Menu>
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
              <Ancora onClick={handleSignin}>Login</Ancora>
            </Link>
          <Link href="biblioteca">
            <Ancora className={activeLink("biblioteca")} onClick={showSiderbar}>
              Minha biblioteca
            </Ancora>
          </Link>

          <Link href="sobre">
            <Ancora className={activeLink("sobre")} onClick={showSiderbar}>
              Sobre
            </Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  );
};

export default Header;
