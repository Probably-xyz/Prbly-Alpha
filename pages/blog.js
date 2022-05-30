import React from "react";
import { prisma } from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";
import Image from "next/image";
import {
  Section,
  Header,
  Subheader,
  BlogSection,
  LandingText,
  LandingSub,
  ImageOneJob,
  ImageTwoJob,
  TalentSignUp,
  NewsLetterTitle,
  NewsLetterSub,
  NewsLetterButton,
} from "@/components/styled-components/Components";
import { createClient } from "contentful";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const talent = await prisma.talent.findUnique({
    where: { userId: user.id },
  });

  const company = await prisma.company.findUnique({
    where: { userId: user.id },
  });

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "topicPost",
  });

  return {
    props: {
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
      topicPost: res.items,
    },
  };
}

const Blog = ({ talent = [], company = [], topicPost }) => {
  console.log(topicPost);
  return (
    <>
      <Navbar talent={talent} company={company} />
      <section>
        <LandingText>
          <Header>
            Probably the most useful blog <br /> around
          </Header>
          <LandingSub> Insights, data, & articles all in one place </LandingSub>
        </LandingText>
        <ImageOneJob src="/landingOne.png" />
        <ImageTwoJob src="/landingTwo.png" />
      </section>
      <BlogSection>
        {topicPost.map((topicPost) => (
          <BlogCard key={topicPost.sys.id} topicPost={topicPost} />
        ))}
      </BlogSection>
    </>
  );
};

export default Blog;
