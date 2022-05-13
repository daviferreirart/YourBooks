import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <Head>
        <title>Your Books</title>
        <link rel="shortcut icon" href="/images/logo.svg" />
      </Head>
      <Header />
      <ThemeProvider theme={darkTheme}>
        <SessionProvider session={session}>
          <ToastContainer position="bottom-right" />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
