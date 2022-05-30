/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactMarkdown from "react-markdown";
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
  JobTitle,
  PostCompanyName,
  BenefitList,
  BenefitBadge,
  SalaryBadge,
  OptionBadge,
  ApplyToJob,
  AtsButton,
} from "@/components/styled-components/Slug";
import SlugJobGrid from "@/components/SlugJobGrid";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { prisma } from "@/lib/prisma";

const ListedJob = ({ post = null, similarPosts = [] }) => {
  const id = post.id;
  const markdown = post?.description ?? "";
  const applyToJob = () => axios.post(`/api/Jobs/${id}`);
  const postExist = similarPosts.length > 0;

  return (
    <>
      <Navbar />

      <Container>
        <CompanyInfo>
          {post?.image ? (
            <img
              src={post.image}
              alt={post.companyName}
              style={{
                width: "200px",
                outline: "3px solid var(--Dark)",
                marginBottom: "50px",
              }}
            />
          ) : null}
          <div>
            <PostCompanyName> {post?.companyName ?? ""} </PostCompanyName>
            <JobTitle> {post?.title ?? ""} </JobTitle>
          </div>
        </CompanyInfo>

        <BenefitList>
          {post?.location ? <OptionBadge>{post.location} </OptionBadge> : null}
          {post?.options ? <OptionBadge>{post.options} </OptionBadge> : null}
          {post?.category ? <OptionBadge>{post.category} </OptionBadge> : null}

          {post?.salary ? <SalaryBadge>{post.salary} </SalaryBadge> : null}
        </BenefitList>

        <BenefitList>
          {post?.benefits[0] ? (
            <BenefitBadge>{post.benefits[0]} </BenefitBadge>
          ) : null}
          {post?.benefits[1] ? (
            <BenefitBadge>{post.benefits[1]} </BenefitBadge>
          ) : null}
          {post?.benefits[2] ? (
            <BenefitBadge>{post.benefits[2]} </BenefitBadge>
          ) : null}
        </BenefitList>
        <div>
          <h1> Job Description </h1>

          <ReactMarkdown children={markdown} />
        </div>
      </Container>

      {post?.atsUrl ? (
        <ApplyToJob>
          <h2> Ready to apply for this job opening?</h2>
          <p>
            Please let the company know that you found this position on
            Cryptomena as a way to support us, so we can keep posting cool jobs.
          </p>

          <a target="_blank" rel="noreferrer" href={post.atsUrl}>
            <AtsButton> Apply </AtsButton>
          </a>
        </ApplyToJob>
      ) : (
        <ApplyToJob>
          <h2> Ready to apply for this job opening?</h2>
          <p>Save a lot of time by applying with your Probably profile.</p>
          <AtsButton onClick={applyToJob}> Apply </AtsButton>
        </ApplyToJob>
      )}

      {postExist ? (
        <>
          <h1 style={{ marginLeft: "120px" }}> Similar Jobs </h1>
          <SlugJobGrid post={similarPosts} />
        </>
      ) : null}

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
    </>
  );
};

export async function getStaticPaths() {
  const post = await prisma.post.findMany({
    select: { id: true },
  });

  return {
    paths: post.map((post) => ({
      params: { id: post.id },
    })),

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
  });

  const similarPosts = await prisma.post.findMany({
    where: { category: post.category, NOT: { id: post.id } },
    take: 4,
  });

  if (post) {
    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        similarPosts: JSON.parse(JSON.stringify(similarPosts)),
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

export default ListedJob;
