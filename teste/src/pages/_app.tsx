import "../../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
    <Head>
      <title>Your Books</title>
    </Head>
    <Header/>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
  </>
  );
}

export default MyApp;
