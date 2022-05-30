/* eslint-disable react/no-unescaped-entities */
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
  TalentSignUp,
  NewsLetterButton,
} from "@/components/styled-components/Components";
import {
  TalentContent,
  TalentIntro,
  SkillList,
  Divider,
  SkillBadge,
  HiddenContent,
  PaymentTalent,
  TalentTitle,
  SlugNewsLetterButton,
  TalentButton,
} from "@/components/styled-components/Slug";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

const ListedTalent = (talent = null) => {
  return (
    <>
      <Navbar />

      <Section
        style={{
          marginTop: "40px",
          marginBottom: "0",
        }}
      >
        <TalentSignUp>
          <div>
            <NewsLetterTitle> Want to be featured here? </NewsLetterTitle>
            <NewsLetterSub>
              Simply create an account and 10x your chance <br /> of hiring top
              cyrpto talent
            </NewsLetterSub>
          </div>
          <NewsLetterButton> Let's Go </NewsLetterButton>
        </TalentSignUp>
      </Section>

      <TalentContent>
        <TalentIntro>
          {talent?.image ? (
            <img
              src={talent.image}
              alt={talent.title}
              style={{
                width: "200px",
                outline: "3px solid var(--Dark)",
              }}
            />
          ) : null}
          <TalentTitle>
            <h1>{talent?.title ?? ""}</h1>
            <SkillBadge> {talent?.status ?? ""} </SkillBadge>
          </TalentTitle>
        </TalentIntro>

        <h1> About Me </h1>
        <Subheader> {talent?.bio ?? ""} </Subheader>
      </TalentContent>

      <PaymentTalent>
        <h2> Want to hire me? </h2>
        <TalentButton> Contact Me </TalentButton>
      </PaymentTalent>
    </>
  );
};

export async function getStaticPaths() {
  const talent = await prisma.talent.findMany({
    select: { id: true },
  });

  return {
    paths: talent.map((talent) => ({
      params: { id: talent.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const talent = await prisma.talent.findUnique({
    where: { id: params.id },
  });

  if (talent) {
    return {
      props: JSON.parse(JSON.stringify(talent)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default ListedTalent;
