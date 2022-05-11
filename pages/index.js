import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Section,
  Header,
  Subheader,
  NewsLetter,
  NewsLetterTitle,
  NewsLetterSub,
  TalentList,
  NewsLetterInput,
} from "@/components/styled-components/Components";
import TalentGrid from "@/components/TalentGrid";
import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import JobGrid from "@/components/JobGrid";
import { Field } from "formik";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const post = await prisma.post.findMany({
    take: 8,
  });

  const talents = await prisma.talent.findMany();
  if (!session) {
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        talents: JSON.parse(JSON.stringify(talents)),
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
}) {
  return (
    <>
      <Navbar talent={talent} company={company} />
      <div
        style={{
          marginLeft: "100px",
          marginTop: "200px",
          width: "750px",
          height: "650px",
        }}
      >
        <Header>
          {" "}
          Find Your Next <br /> Blockchain Job <br /> In The MENA Region{" "}
        </Header>
        <Subheader>
          {" "}
          Find the latest full-time, part-time or freelance Webflow.
        </Subheader>
      </div>
      <NewsLetter
        style={{
          position: "absolute",
          top: "20%",
          left: "60%",
        }}
      >
        <NewsLetterTitle> Sign up to our newsletter!! </NewsLetterTitle>
        <NewsLetterSub>
          Get updates on most recent jobs, we heard unemployment is tough.
        </NewsLetterSub>
        <form>
          <NewsLetterInput placeholder="E-mail" />
          <NewsLetterInput placeholder="Full Name" />
          <button type="submit" className="pushableNews">
            <span className="frontNews">Less Go</span>
          </button>
        </form>
      </NewsLetter>
      <Section>
        {" "}
        <Header> Our most recent jobs </Header>
        <Subheader> Some Subtitle text about jobs and stuff ss </Subheader>
      </Section>
      <JobGrid post={post} />
      <Section style={{ marginTop: "230px" }}>
        {" "}
        <Header> Our most recent talents </Header>
        <Subheader> Some Subtitle text about jobs and stuff ss </Subheader>
      </Section>
      <TalentGrid talents={talents} />
    </>
  );
}
