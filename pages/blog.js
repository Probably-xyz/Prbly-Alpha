import React, { useState } from "react";
// import { prisma } from "@/lib/prisma";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Footer from "@/components/Footer";
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

  // const user = await prisma.user.findUnique({
  //   where: { email: session.user.email },
  // });

  // const talent = await prisma.talent.findUnique({
  //   where: { userId: session.user.id },
  // });

  // const company = await prisma.company.findUnique({
  //   where: { userId: user.id },
  // });

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blogPost",
  });

  return {
    props: {
      // talent: JSON.parse(JSON.stringify(talent)),
      // company: JSON.parse(JSON.stringify(company)),
      blogPost: res.items,
    },
  };
}

const Blog = ({ blogPost }) => {
  const [elNumber, setElNumber] = useState(3);

  const blogFiltered = blogPost.slice(0, elNumber);

  const lazyLoad = () => {
    setElNumber(elNumber + elNumber);
  };
  return (
    <>
      <Navbar />
      <section>
        <LandingText>
          <Header>Probably the most useful blog around</Header>
          <LandingSub> Insights, data, & articles all in one place </LandingSub>
        </LandingText>
        {/* <ImageOneJob src="/landingOne.png" />
        <ImageTwoJob src="/landingTwo.png" /> */}
      </section>

      <Section>
        <BlogSection>
          {blogFiltered.map((blogPost) => (
            <BlogCard key={blogPost.sys.id} blogPost={blogPost} />
          ))}
        </BlogSection>
      </Section>
      <Section style={{ marginTop: "50px" }}>
        <button onClick={() => lazyLoad()} className="pushableLanding">
          <span className="frontLanding"> Load More...</span>
        </button>
      </Section>

      <Footer />
    </>
  );
};

export default Blog;
