import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Your Books</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp