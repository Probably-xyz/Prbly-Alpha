/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import LandingJobGrid from "@/components/LandingJobGrid";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";
import { useState } from "react";
import {
  Section,
  Header,
  Subheader,
  LandingText,
  LandingSub,
  ImageOne,
  ImageTwo,
  Form,
  FormCon,
  LocationSearch,
  TitleSearch,
  NewsLetter,
  NewsLetterTitle,
  NewsLetterSub,
  NewsLetterButton,
  NewsLetterInput,
} from "@/components/styled-components/Components";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
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

  const jobs = await prisma.post.findMany({
    where: {
      companyId: company.id,
    },
    orderBy: { createdAt: "desc" },
  });

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const MyJobPosts = ({ jobs = [], talent = [], company = [] }) => {
  return (
    <>
      <Navbar talent={talent} company={company} />
      <section style={{ marginBottom: "150px" }}>
        <LandingText>
          <Header> Your Job Posts </Header>
          <LandingSub>A list of all your jobs posted on Probably</LandingSub>
        </LandingText>

        <ImageOne src="/landingOne.png" />
        <ImageTwo src="/landingTwo.png" />

        <Section>
          <LandingJobGrid post={jobs} />
        </Section>
      </section>

      {/* <Section>
        <NewsLetter>
          <NewsLetterTitle>
            Want to recieve the latest jobs to your inbox?
          </NewsLetterTitle>
          <NewsLetterSub>
            Our weekly newsletter that makes sense of everything crypto with
            <br />a dash of jobs, talent, and information.
          </NewsLetterSub>
          <form>
            <NewsLetterInput placeholder="Enter your e-mail" />
            <NewsLetterButton> Let's Go </NewsLetterButton>
          </form>
        </NewsLetter>
      </Section> */}
    </>
  );
};

export default MyJobPosts;
