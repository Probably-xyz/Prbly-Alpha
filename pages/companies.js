/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import NavbarWithDrop from "@/components/NavbarWithDrop";
import Footer from "@/components/Footer";
import { getSession } from "next-auth/react";
import {
  Section,
  Header,
  Subheader,
  LandingText,
  LandingSub,
  ImageOneJob,
  ImageTwoJob,
  TalentSignUp,
  NewsLetterTitle,
  NewsLetterSub,
  TalentButton,
} from "@/components/styled-components/Components";
import Link from "next/link";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const companies = await prisma.company.findMany();

  if (!session) {
    return {
      props: {
        companies: JSON.parse(JSON.stringify(companies)),
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
      companies: JSON.parse(JSON.stringify(companies)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const Companies = ({ companies = [], talent = [], company = [] }) => {
  return (
    <>
      <NavbarWithDrop talent={talent} company={company} />
      <section>
        <LandingText>
          <Header>
            Probably the coolest companies <br /> in the region{" "}
          </Header>
          <LandingSub> Find the top MENA crypto companies </LandingSub>
        </LandingText>
        {/* <ImageOneJob src="/landingOne.png" />
        <ImageTwoJob src="/landingTwo.png" /> */}
      </section>

      <Section>
        <TalentSignUp>
          <div className="talent-signup">
            <NewsLetterTitle className="talent-signup-title">
              {" "}
              Want to be featured here?{" "}
            </NewsLetterTitle>
            <NewsLetterSub className="talent-signup-sub">
              Simply create an account and 10x your chance <br /> of hiring top
              cyrpto talent
            </NewsLetterSub>
          </div>
          <Link href="/api/auth/signin">
            <TalentButton> Let's Go </TalentButton>
          </Link>
        </TalentSignUp>
      </Section>

      <Grid companies={companies} />

      <Footer />
    </>
  );
};

export default Companies;
