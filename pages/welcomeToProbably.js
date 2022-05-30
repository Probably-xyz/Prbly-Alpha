/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  Section,
  JobPostSection,
  JobPostCard,
  ProfileCard,
  Header,
  Subheader,
  LandingText,
  LandingSub,
  ProfileTitle,
  ProfileFeatures,
  FeatureItem,
} from "@/components/styled-components/Components";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
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
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

export default function WelcomeToProbably({ talent = [], company = [] }) {
  return (
    <>
      {talent ? (
        <h1> You probably should not be here </h1>
      ) : company ? (
        <h1> You probably should not be here </h1>
      ) : (
        <Section>
          <section>
            <LandingText>
              <Header>
                Ready to join the crypto place? <br /> Choose your Profile
              </Header>
              <LandingSub>Find the top MENA crypto companies</LandingSub>
            </LandingText>
          </section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ProfileCard>
              <ProfileTitle>Talent</ProfileTitle>
              <p> for talented people in crypto </p>
              <ProfileFeatures>
                <FeatureItem>
                  Apply to as many crypto jobs <br /> as you want
                </FeatureItem>
                <FeatureItem>
                  Get feautered in the talent <br /> section
                </FeatureItem>
                <FeatureItem>
                  10x your exposure to crypto <br /> recruiters
                </FeatureItem>
              </ProfileFeatures>
              <Link href="/createTalentProfile">
                <button className="pushable">
                  <span className="front"> Get Started </span>
                </button>
              </Link>
            </ProfileCard>

            <ProfileCard>
              <ProfileTitle>Company</ProfileTitle>
              <p> for companies and recruiters in crypto </p>
              <ProfileFeatures>
                <FeatureItem>
                  Post jobs to attract <br /> talent
                </FeatureItem>
                <FeatureItem>
                  Get feautered in the company <br /> section
                </FeatureItem>
                <FeatureItem>
                  10x your exposure to crypto <br /> talent
                </FeatureItem>
                <FeatureItem>
                  On demand crypto talent to <br /> recruit
                </FeatureItem>
              </ProfileFeatures>
              <Link href="/createCompanyProfile">
                <button className="pushable">
                  <span className="front"> Get Started </span>
                </button>
              </Link>
            </ProfileCard>
          </div>
        </Section>
      )}
    </>
  );
}
