/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  HiddenInput,
} from "@/components/styled-components/Slug";
import SlugJobGrid from "@/components/SlugJobGrid";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { prisma } from "@/lib/prisma";
import { useRouter } from "next/router";
import { useFormspark } from "@formspark/use-formspark";
import { signOut, getSession, signIn, useSession } from "next-auth/react";

const FORMSPARK_ID = "RIl3oCoZ";

const ListedJob = ({ post = null, similarPosts = [] }) => {
  // const id = post.id;
  // const apply = () => {
  //   axios.post("/api/apply", { id: post.id });
  // };

  const { data: session, status } = useSession();
  const loggedIn = session?.user;

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_ID,
  });

  const [email, setEmail] = useState("");
  const [postId, setPostId] = useState("");
  const [success, setSuccess] = useState(false);

  const markdown = post?.description ?? "";
  const postExist = similarPosts.length > 0;

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({
      email: session?.user.email,
      postId: post?.id,
    });
    setSuccess(true);
  };

  const router = useRouter();

  // Fallback version
  if (router.isFallback) {
    return "Loading...";
  }

  return (
    <>
      <Navbar />

      <div className="job-post-con">
        <Container>
          <CompanyInfo>
            {post?.image ? (
              <img
                src={post.image}
                alt={post.companyName}
                style={{
                  width: "200px",
                  height: "200px",
                  outline: "3px solid var(--Dark)",
                  marginBottom: "50px",
                }}
              />
            ) : null}
            <div>
              <Link href={`/Companies/${post?.companyId ?? ""}`}>
                <PostCompanyName style={{ cursor: "pointer" }}>
                  {" "}
                  {post?.companyName ?? ""}{" "}
                </PostCompanyName>
              </Link>
              <JobTitle> {post?.title ?? ""} </JobTitle>
            </div>
          </CompanyInfo>

          <BenefitList className="non-mobile">
            {post?.location ? (
              <OptionBadge>{post.location} </OptionBadge>
            ) : null}
            {post?.options ? <OptionBadge>{post.options} </OptionBadge> : null}
            {post?.category ? (
              <OptionBadge>{post.category} </OptionBadge>
            ) : null}

            {post?.salary ? <SalaryBadge>{post.salary} </SalaryBadge> : null}
          </BenefitList>

          <BenefitList className="non-mobile">
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

          <BenefitList className="mobile-list">
            {post?.location ? (
              <OptionBadge>{post.location} </OptionBadge>
            ) : null}
            {post?.options ? <OptionBadge>{post.options} </OptionBadge> : null}
          </BenefitList>

          <BenefitList className="mobile-list">
            {post?.category ? (
              <OptionBadge>{post.category} </OptionBadge>
            ) : null}

            {post?.salary ? <SalaryBadge>{post.salary} </SalaryBadge> : null}
          </BenefitList>

          <BenefitList className="mobile-list">
            {post?.benefits[0] ? (
              <BenefitBadge>{post.benefits[0]} </BenefitBadge>
            ) : null}
            {post?.benefits[1] ? (
              <BenefitBadge>{post.benefits[1]} </BenefitBadge>
            ) : null}
          </BenefitList>

          <BenefitList className="mobile-list">
            {post?.benefits[2] ? (
              <BenefitBadge>{post.benefits[2]} </BenefitBadge>
            ) : null}
          </BenefitList>

          <div>
            <h1> Job Description </h1>

            <ReactMarkdown children={markdown} />
          </div>
        </Container>

        {loggedIn ? (
          <>
            {post?.atsUrl ? (
              <ApplyToJob>
                <h2> Ready to apply for this job opening?</h2>
                <p>
                  Please let the company know that you found this position on
                  Cryptomena as a way to support us, so we can keep posting cool
                  jobs.
                </p>

                <a target="_blank" rel="noreferrer" href={post.atsUrl}>
                  <AtsButton> Apply </AtsButton>
                </a>
              </ApplyToJob>
            ) : (
              <ApplyToJob>
                <h2> Ready to apply for this job opening?</h2>
                <p>
                  Save a lot of time by applying with your Probably profile.
                </p>
                <form onSubmit={onSubmit}>
                  <AtsButton type="submit" disabled={submitting}>
                    {submitting
                      ? "Submitting..."
                      : success
                      ? "All done!"
                      : "Apply"}
                  </AtsButton>
                </form>
              </ApplyToJob>
            )}
          </>
        ) : (
          <ApplyToJob>
            <h2> You're not signed in</h2>
            <p>
              Please sign in and create an account to access talent profile
              applications and much more!
            </p>

            <Link target="_blank" rel="noreferrer" href="/api/auth/signin">
              <AtsButton> Sign-in </AtsButton>
            </Link>
          </ApplyToJob>
        )}
      </div>

      {postExist ? (
        <>
          <h1 className="similar-posts"> Similar Jobs </h1>
          <SlugJobGrid post={similarPosts} />
        </>
      ) : null}
      {/* </div> */}

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

      <Footer />
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

    fallback: true,
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
