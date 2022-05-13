import { Container, LoginGoogleButton, AppName } from '../../styles/login/index'
import { GetServerSideProps }from 'next';
import Image from 'next/image'
import { HiOutlineBookOpen } from 'react-icons/hi'
import {FcGoogle} from 'react-icons/fc'
import { getSession, signIn } from 'next-auth/react';

export default function Home() {

  function handleSignin() {
    signIn('google')
  }
  return (
      <Container>
      <Image src={"/images/logo 2.svg"} width="200px" height={"100px"}/>
      <LoginGoogleButton onClick={handleSignin}>
        <FcGoogle/>
        Sign in with google
      </LoginGoogleButton>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
