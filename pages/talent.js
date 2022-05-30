/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import TalentGrid from "@/components/TalentGrid";
import Navbar from "@/components/Navbar";
import {
  Section,
  LandingText,
  Header,
  LandingSub,
  ImageOne,
  ImageTwo,
  TalentSignUp,
  NewsLetterTitle,
  NewsLetterSub,
  NewsLetterButton,
} from "@/components/styled-components/Components";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const talents = await prisma.talent.findMany();
  if (!session) {
    return {
      props: {
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
      talents: JSON.parse(JSON.stringify(talents)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const Talent = ({ talents = [], talent = [], company = [] }) => {
  return (
    <>
      <Navbar talent={talent} company={company} />
      <section>
        <LandingText>
          <Header>Probably the best talent in crypto</Header>
          <LandingSub>Hire crypto talent directly from us</LandingSub>
        </LandingText>
        <ImageOne src="/landingOne.png" />
        <ImageTwo src="/landingTwo.png" />
      </section>

      <Section>
        <TalentSignUp>
          <div>
            <NewsLetterTitle> Want to be featured here? </NewsLetterTitle>
            <NewsLetterSub>
              Simply create an account and 10x your chance <br /> of landing a
              job in crypto
            </NewsLetterSub>
          </div>
          <NewsLetterButton> Let's Go</NewsLetterButton>
        </TalentSignUp>
      </Section>

      <Section>
        <TalentGrid talents={talents} />
      </Section>
    </>
  );
};

export default Talent;