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
        <div style={{ width: "600px", padding: "30px" }}>
          <Header> Pick a Job type </Header>
          <Subheader>
            {" "}
            Once you've chosen your preferred profile type you will be able to
            access all the features you probably need{" "}
          </Subheader>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link href="/postJobFeatured">
            <ProfileCard>
              <h1> The Featured Job </h1>
              Features here
            </ProfileCard>
          </Link>
          <Link href="/postJobFree">
            <ProfileCard>
              <h1> The Free Trail </h1>
              Features here
            </ProfileCard>
          </Link>
        </div>
      </Section>
    </>
  );
}
