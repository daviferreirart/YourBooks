import React from "react";
import {
  Container,
  Content,
  Infos,
  Name,
  Name2,
  Name3,
  Intro,
} from "../../styles/sobre/styles";
import { FaGoogle, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiHeroku,
  SiPostgresql,
  SiNextdotjs,
  SiVercel,
  SiRailway
} from "react-icons/si";
import ItemContact from "../../styles/sobre/index";

export default function sobre() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Sobre o site</Name>
          <Intro>
            Site criado como projeto para a disciplina de Estágio Supervisionado
            II do curso de Sistemas de Informação da UNI7.
          </Intro>
        </Infos>

        <Name2>Equipe:</Name2>
        <Infos>
          <Intro>Charlyane Santiago e Davi Ferreira</Intro>
        </Infos>

        <Name2>Tecnologias:</Name2>

        <ItemContact IconFa={SiTypescript} LinkContact="Typescript" />
        <ItemContact IconFa={SiNextdotjs} LinkContact="Next.js" />
        <ItemContact IconFa={FaReact} LinkContact="React" />
        <ItemContact IconFa={FaGoogle} LinkContact="APIs Google (Books, OAuth)" />
        <ItemContact IconFa={SiVercel} LinkContact="Vercel" />
        <ItemContact IconFa={SiHeroku} LinkContact="Heroku" />
        <ItemContact IconFa={SiRailway} LinkContact="Railway" />
        <ItemContact IconFa={SiPostgresql} LinkContact="PostgreSQL" />
      </Content>
    </Container>
  );
}
