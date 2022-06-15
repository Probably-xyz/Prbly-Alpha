/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import JobGrid from "@/components/JobGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSession } from "next-auth/react";
import { useState } from "react";
import {
  Section,
  Header,
  Subheader,
  LandingText,
  LandingSub,
  ImageOneJob,
  ImageTwoJob,
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

  const jobs = await prisma.post.findMany();

  if (!session) {
    return {
      props: {
        jobs: JSON.parse(JSON.stringify(jobs)),
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
      jobs: JSON.parse(JSON.stringify(jobs)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const Jobs = ({ jobs = [], talent = [], company = [] }) => {
  return (
    <>
      <Navbar talent={talent} company={company} />
      <section style={{ marginBottom: "10px" }}>
        <LandingText>
          <Header>Probably the best jobs for you</Header>
          <LandingSub style={{ position: "relative", bottom: "20px" }}>
            A list of jobs curated to your needs and prefrences
          </LandingSub>
        </LandingText>

        {/* <ImageOneJob src="/landingOne.png" />
        <ImageTwoJob src="/landingTwo.png" /> */}

        <Section>
          <JobGrid post={jobs} />
        </Section>
      </section>

      <Section>
        <NewsLetter>
          <NewsLetterTitle>
            Want to recieve the latest jobs to your inbox?
          </NewsLetterTitle>
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
            <NewsLetterButton type="submit"> Let's Go </NewsLetterButton>
          </form>
        </NewsLetter>
      </Section>

      <Footer />
    </>
  );
};

export default Jobs;
