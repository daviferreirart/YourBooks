import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Your Books</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <GlobalStyles/>
      </SessionProvider>
    </>
  )
}

export default MyApp