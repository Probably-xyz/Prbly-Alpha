/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import {
  Section,
  Header,
  Subheader,
  NewsLetter,
  NewsLetterTitle,
  NewsLetterSub,
  TalentList,
  NewsLetterInput,
  Form,
  FormCon,
  TitleSearch,
  LocationSearch,
  LandingText,
  ImageOne,
  LandingSub,
  ImageTwo,
  HeaderTwo,
  NewsLetterButton,
  BlogSection,
} from "@/components/styled-components/Components";
import BlogCard from "@/components/BlogCard";
import NavbarLanding from "@/components/NavbarLanding";
import LandingTalentGrid from "@/components/LandingTalentGrid";
import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import JobGrid from "@/components/JobGrid";
import LandingJobGrid from "@/components/LandingJobGrid";
import { Field } from "formik";
import { PaddleLoader } from "@/components/PaddleLoader";
import { createClient } from "contentful";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const post = await prisma.post.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
  });

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const talents = await prisma.talent.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  if (!session) {
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        talents: JSON.parse(JSON.stringify(talents)),
        blogPost: res.items,
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const talent = await prisma.talent.findUnique({
    where: { userId: user.id },
  });

  const company = await prisma.company.findUnique({
    where: { userId: user.id },
  });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
      blogPost: res.items,
      talent: JSON.parse(JSON.stringify(talent)),
      talents: JSON.parse(JSON.stringify(talents)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

export default function Home({
  talent = [],
  talents = [],
  company = [],
  post = [],
  blogPost,
}) {
  const { data: session, status } = useSession();
  const loggedIn = session?.user;

  const elNumber = 3;
  const blogFiltered = blogPost.slice(0, elNumber);

  console.log(company);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Crypto, meta, metaverse, web3, wbe3.0, MENA, middle east, design, creative, marketing, ethereum, bitcoin, litecoin, cryptocurrencies, blockchain, digital, wallet, smart contract, nayef kanaan, nabil kanaan, nabil, kanaan, probably, cryptomena, prbly, nayef, kanaan, naif, excelsior"
        />
        <meta name="author" content="Excelsior Studios, Nayef Kanaan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PaddleLoader />
      <Navbar talent={talent} company={company} />

      <section
        style={{
          height: "650px",
        }}
      >
        <LandingText>
          <Header>
            Where talent find jobs & <br /> recruiters find talent
          </Header>
          <LandingSub>
            Join the crypto place so you can discover the most talented people &
            find the <br /> best jobs in crypto all in one place.
          </LandingSub>
          {loggedIn ? (
            <div>
              {talent ? (
                <Link href="/jobs">
                  <button className="pushableLanding">
                    <span className="frontLanding"> Explore Jobs </span>
                  </button>
                </Link>
              ) : company ? (
                <Link href="/talent">
                  <button className="pushableLanding">
                    <span className="frontLanding"> Explore Talent </span>
                  </button>
                </Link>
              ) : (
                <Link href="/welcomeToProbably">
                  <button className="pushableLanding">
                    <span className="frontLanding"> Create Profile </span>
                  </button>
                </Link>
              )}
            </div>
          ) : (
            <button onClick={() => signIn()} className="pushableLanding">
              <span className="frontLanding"> Get Started </span>
            </button>
          )}
        </LandingText>

        {/* <ImageOne src="/landingOne.png" />
        <ImageTwo src="/landingTwo.png" /> */}
      </section>

      <Section>
        <Subheader className="sub-mobile">
          {" "}
          new jobs added every week{" "}
        </Subheader>
        <HeaderTwo> Latest Jobs </HeaderTwo>
        <LandingJobGrid post={post} />
        <Link href="/jobs">
          <button className="pushableLanding">
            <span className="frontLanding"> See more </span>
          </button>
        </Link>
      </Section>

      <Section>
        <NewsLetter>
          <NewsLetterTitle> Check out The Sensibility Letter </NewsLetterTitle>
          <NewsLetterSub>
            Our weekly newsletter that makes sense of everything crypto with
            <br />a dash of jobs, talent, and information.
          </NewsLetterSub>
          <form
            action="https://www.getrevue.co/profile/probablyxyz/add_subscriber"
            method="post"
            target="_blank"
          >
            <NewsLetterInput
              placeholder="Enter your e-mail"
              type="email"
              name="member[email]"
            />
            <NewsLetterButton> Let's Go </NewsLetterButton>
          </form>
        </NewsLetter>
      </Section>

      <Section style={{ marginTop: "20px" }}>
        <Subheader className="sub-mobile">
          {" "}
          connect with the best crypto talent{" "}
        </Subheader>
        <HeaderTwo> Latest Talent </HeaderTwo>
        <LandingTalentGrid talents={talents} />
        <Link href="/talent">
          <button className="pushableLanding">
            <span className="frontLanding"> See more </span>
          </button>
        </Link>
      </Section>

      <Section style={{ marginTop: "120px" }}>
        <Subheader className="sub-mobile">
          {" "}
          a blog covering all topics crypto{" "}
        </Subheader>
        <HeaderTwo> Latest Articles </HeaderTwo>
      </Section>
      <Section>
        <BlogSection>
          {blogFiltered.map((blogPost) => (
            <BlogCard key={blogPost.sys.id} blogPost={blogPost} />
          ))}
        </BlogSection>
      </Section>
      <Section style={{ marginTop: "50px" }}>
        <Link href="/blog">
          <button className="pushableLanding">
            <span className="frontLanding"> See more </span>
          </button>
        </Link>
      </Section>

      <Footer />
    </>
  );
}
