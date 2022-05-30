/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "@/components/Navbar";
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

const ListedCompany = ({ company = null, jobs = [], companyDesc }) => {
  console.log(jobs);

  const markdownContent = company?.bio ?? "";

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
                outline: "3px solid var(--Dark)",
                marginBottom: "50px",
              }}
            />
          ) : null}
          <CompanyName> {company?.name ?? ""} </CompanyName>
        </CompanyInfo>
        <BadgeList>
          <Link href={company?.website ?? ""} target="_blank">
            <BenefitBadge style={{ cursor: "pointer" }}>
              {" "}
              Company Website{" "}
            </BenefitBadge>
          </Link>
        </BadgeList>
        <h1> Company Description </h1>
        <ReactMarkdown children={markdownContent} />{" "}
      </Container>

      <CompanyNewsLetter>
        <CompanyNewsLetterTitle>
          Check out The Sensibility <br /> Letter
        </CompanyNewsLetterTitle>
        <NewsLetterSub>
          Weekly newsletter that makes sense of everything crypto with a dash of
          jobs, talent, and information.
        </NewsLetterSub>
        <NewsLetterInput placeholder="Enter your E-mail" />
        <SlugNewsLetterButton> Subscribe </SlugNewsLetterButton>
      </CompanyNewsLetter>

      <h1 style={{ marginLeft: "120px" }}> Company Posts </h1>

      <SlugJobGrid post={jobs} />

      {/* <Section>
        <LandingJobGrid post={post} />
      </Section> */}
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const company = await prisma.company.findUnique({
    where: { id: params.id },
  });

  const jobs = await prisma.post.findMany({
    where: { companyId: company.id },
  });

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "company",
  });

  if (company) {
    return {
      props: {
        company: JSON.parse(JSON.stringify(company)),
        jobs: JSON.parse(JSON.stringify(jobs)),
        comapnyDesc: res.items,
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
