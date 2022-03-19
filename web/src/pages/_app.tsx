import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@material-ui/core'
import GlobalStyles from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    }
  });
  return (
    <>
      <Head>
        <title>Your Books</title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <GlobalStyles />
        </SessionProvider>

      </ThemeProvider>
    </>
  )
}

export default MyApp