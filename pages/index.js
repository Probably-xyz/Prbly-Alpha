/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
} from "@/components/styled-components/Components";
import NavbarLanding from "@/components/NavbarLanding";
import TalentGrid from "@/components/TalentGrid";
import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import JobGrid from "@/components/JobGrid";
import LandingJobGrid from "@/components/LandingJobGrid";
import { Field } from "formik";
import { PaddleLoader } from "@/components/PaddleLoader";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const post = await prisma.post.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
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
  const { data: session, status } = useSession();
  const loggedIn = session?.user;
  const addPost = console.log("successsssss");
  return (
    <>
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

        <ImageOne src="/landingOne.png" />
        <ImageTwo src="/landingTwo.png" />
      </section>

      <Section>
        <Subheader> new jobs added every week </Subheader>
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
        <Subheader> Connect with the best crypto talent </Subheader>
        <HeaderTwo> Latest Talent </HeaderTwo>
        <TalentGrid talents={talents} />
        <Link href="/talent">
          <button className="pushableLanding">
            <span className="frontLanding"> See more </span>
          </button>
        </Link>
      </Section>
    </>
  );
}
