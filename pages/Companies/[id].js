/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signOut, getSession, signIn } from "next-auth/react";
import {
  Section,
  Header,
  Subheader,
  NewsLetter,
  NewsLetterTitle,
  NewsLetterSub,
  FormContainer,
  BadgeList,
  BenefitBadge,
  NewsLetterButton,
} from "@/components/styled-components/Components";
import {
  Container,
  CompanyInfo,
  CompanyName,
  CompanyNewsLetter,
  CompanyNewsLetterTitle,
  NewsLetterInput,
  SlugNewsLetterButton,
} from "@/components/styled-components/Slug";
import SlugJobGrid from "@/components/SlugJobGrid";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { createClient } from "contentful";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const ListedCompany = ({ company = null, jobs = [] }) => {
  const markdownContent = company?.bio ?? "";

  const router = useRouter();

  // Fallback version
  if (router.isFallback) {
    return "Loading...";
  }

  return (
    <>
      <Navbar />

      <Container>
        <CompanyInfo>
          {company?.image ? (
            <img
              src={company.image}
              alt={company.title}
              style={{
                width: "200px",
                height: "200px",
                outline: "3px solid var(--Dark)",
                marginBottom: "50px",
              }}
            />
          ) : null}
          <CompanyName> {company?.name ?? ""} </CompanyName>
        </CompanyInfo>
        <BadgeList>
          <a
            href={"https://" + company?.website ?? ""}
            target="_blank"
            rel="noreferrer"
          >
            <BenefitBadge style={{ cursor: "pointer" }}>
              {" "}
              Company Website{" "}
            </BenefitBadge>
          </a>
        </BadgeList>
        <h1> Company Description </h1>
        <ReactMarkdown children={markdownContent} />{" "}
      </Container>

      {/* <CompanyNewsLetter>
        <CompanyNewsLetterTitle>
          Check out The Sensibility <br /> Letter
        </CompanyNewsLetterTitle>
        <NewsLetterSub>
          Weekly newsletter that makes sense of everything crypto with a dash of
          jobs, talent, and information.
        </NewsLetterSub>
        <NewsLetterInput placeholder="Enter your E-mail" />
        <SlugNewsLetterButton> Subscribe </SlugNewsLetterButton>
      </CompanyNewsLetter> */}

      <Section className="company-news">
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

      <h1 className="similar-posts"> Company Posts </h1>

      <SlugJobGrid post={jobs} />

      {/* <Section>
        <LandingJobGrid post={post} />
      </Section> */}

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const companies = await prisma.company.findMany({
    select: { id: true },
  });

  // const posts = await prisma.post.findMany({
  //   where: { companyId: companies.id },
  // });

  return {
    paths: companies.map((company) => ({
      params: { id: company.id },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const company = await prisma.company.findUnique({
    where: { id: params.id },
  });

  const jobs = await prisma.post.findMany({
    where: { companyId: company.id },
    take: 4,
  });

  if (company) {
    return {
      props: {
        company: JSON.parse(JSON.stringify(company)),
        jobs: JSON.parse(JSON.stringify(jobs)),
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default ListedCompany;
