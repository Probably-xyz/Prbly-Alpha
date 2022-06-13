import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider as AuthProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title> Probably </title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Crypto, meta, metaverse, web3, wbe3.0, MENA, middle east, design, creative, marketing, ethereum, bitcoin, litecoin, cryptocurrencies, blockchain, digital, wallet, smart contract, nayef kanaan, nabil kanaan, nabil, kanaan, probably, cryptomena, prbly, nayef, kanaan, naif, excelsior"
        />
        <meta name="author" content="Excelsior Studios, Nayef Kanaan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <AuthProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default MyApp;
