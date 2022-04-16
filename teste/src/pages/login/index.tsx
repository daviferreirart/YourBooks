import { Container, LoginGoogleButton, AppName } from '../../../../web/src/styles/login'
import { GetServerSideProps } from 'next';
import { HiOutlineBookOpen } from 'react-icons/hi'
import {FcGoogle} from 'react-icons/fc'
import { getSession, signIn } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
};

export default function Home() {

  function handleSignin() {
    signIn('google')
  }
  return (
    <Container>
      <HiOutlineBookOpen size={64} />
      <LoginGoogleButton onClick={handleSignin}>
        <FcGoogle/>
        Sign in with google
      </LoginGoogleButton>
    </Container>
  )
}
