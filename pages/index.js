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
import { Field } from "formik";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const post = await prisma.post.findMany({
    take: 8,
  });

  const result = await prisma.post.findMany({
    where: {
      title: {
        search: " ",
      },
    },
  });

  const talents = await prisma.talent.findMany();
  if (!session) {
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        talents: JSON.parse(JSON.stringify(talents)),
        result: JSON.parse(JSON.stringify(result)),
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
      result: JSON.parse(JSON.stringify(result)),
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
  result = [],
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState(" ");
  // console.log(errors);
  const onSubmit = (data) => {
    setTitle(data.title);
    console.log(data);
  };

  return (
    <>
      <Navbar talent={talent} company={company} />

      <section
        style={{
          height: "650px",
        }}
      >
        <LandingText>
          <Header>
            Find Your Next Blockchain Job <br /> In The MENA Region
          </Header>
          <LandingSub>
            Join the Sensibility Letter, our weekly newsletter that makes sense
            of teiicyrpto <br /> with a dash of jobs, talent, and information.
          </LandingSub>
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
            <Link href="/signin">
              <button className="pushableLanding">
                <span className="frontLanding"> Get Started </span>
              </button>
            </Link>
          )}

          {/* <Form onSubmit={handleSubmit(onSubmit)}>
            <FormCon>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                }}
              >
                {" "}
                <img src="/Filters.png" />
              </span>

              <TitleSearch
                type="text"
                placeholder="Front-End Developer"
                {...register("title", { required: true })}
              />
              <span
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                }}
              >
                <img src="/Location.png" />
              </span>
              <LocationSearch
                type="text"
                {...register("location", { required: true })}
                placeholder="Dubai / UAE"
              />
            </FormCon>
            <button type="submit" className="pushableLanding">
              <span className="frontLanding"> Let's Go </span>
            </button>
          </Form> */}
        </LandingText>

        <ImageOne src="/landingOne.png" />
        <ImageTwo src="/landingTwo.png" />
      </section>

      <Section>
        <Subheader> +100 jobs uploaded per week </Subheader>
        <HeaderTwo> Latest Jobs </HeaderTwo>
        <JobGrid result={result} post={post} />
        <Link href="/jobs">
          <button className="pushableLanding">
            <span className="frontLanding"> Explore Jobs </span>
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
          <form>
            <NewsLetterInput placeholder="Enter your e-mail" />
            <NewsLetterButton> Let's Go </NewsLetterButton>
          </form>
        </NewsLetter>
      </Section>

      <Section style={{ marginTop: "20px" }}>
        <Subheader> A large crypto talent base </Subheader>
        <HeaderTwo> Latest Talent </HeaderTwo>
        <TalentGrid talents={talents} />
        <Link href="/talent">
          <button className="pushableLanding">
            <span className="frontLanding"> Explore Talent </span>
          </button>
        </Link>
      </Section>
    </>
  );
}
