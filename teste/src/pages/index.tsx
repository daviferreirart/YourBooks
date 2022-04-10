import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Bem-vindo a sua biblioteca virtual</Name>
        <Intro>Utilize o YourBooks para montar a sua lista de livros, pesquisar titulos, 
          ver informações sobre as edições e encontrar novas leituras!
        </Intro>
        <Link href="pesquisa">
          <LinkProjects>Pesquisar livro <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo 2.svg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}