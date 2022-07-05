import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider as AuthProvider } from "next-auth/react";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <NextSeo
        title="Probably"
        description="The all in one place for crypto talent, jobs, and information."
        openGraph={{
          url: "https://www.prbly.xyz/",
          title:
            "Probably. The all in one place for crypto talent, jobs, and information.",
          description:
            "Probably combines all your crypto needs in one place. Are you hiring? Looking for special talent? Searching for a job? Trying to learn? Probably has it all, in a fun high growth environment with a lot more to come.",
          images: [
            {
              url: "/banner.png",
              width: 800,
              height: 600,
              alt: "A Crpto Place",
              type: "image/png",
            },
            {
              url: "/banner.png",
              width: 900,
              height: 800,
              alt: "A Crpto Place",
              type: "image/png",
            },
            { url: "/banner.png" },
            { url: "/banner.png" },
          ],
          site_name: "Mirathi",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');`}{" "}
      </Script>

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
