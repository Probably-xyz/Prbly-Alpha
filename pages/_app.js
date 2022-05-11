import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider as AuthProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title> Probably </title>
      </Head>

      <AuthProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default MyApp;
