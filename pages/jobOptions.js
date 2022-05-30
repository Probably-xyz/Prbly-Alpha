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
  FeatureItem,
  LandingText,
  LandingSub,
  ProfileTitle,
  ProfileFeatures,
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

export default function ChooseAJobOption({ talent = [], company = [] }) {
  return (
    <>
      <Navbar talent={talent} company={company} />
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
            <ProfileTitle> Featured Post </ProfileTitle>
            <p> featured description </p>
            <ProfileFeatures>
              <FeatureItem>Feature</FeatureItem>
              <FeatureItem>Feature</FeatureItem>
              <FeatureItem>Feature</FeatureItem>
            </ProfileFeatures>
            <Link href="/postJobFeatured">
              <button className="pushable">
                <span className="front"> Get Started </span>
              </button>
            </Link>
          </ProfileCard>

          <ProfileCard>
            <ProfileTitle> Free Trail </ProfileTitle>
            <p> description </p>
            <ProfileFeatures>
              <FeatureItem>Feature</FeatureItem>
              <FeatureItem>Feature</FeatureItem>
              <FeatureItem>Feature</FeatureItem>
            </ProfileFeatures>
            <Link href="/postJobFree">
              <button className="pushable">
                <span className="front"> Get Started </span>
              </button>
            </Link>
          </ProfileCard>
        </div>
      </Section>
    </>
  );
}
