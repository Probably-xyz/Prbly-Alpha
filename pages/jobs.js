import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import JobGrid from "@/components/JobGrid";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";
import {
  Section,
  Header,
  Subheader,
} from "@/components/styled-components/Components";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const jobs = await prisma.post.findMany();

  if (!session) {
    return {
      props: {
        jobs: JSON.parse(JSON.stringify(jobs)),
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
      jobs: JSON.parse(JSON.stringify(jobs)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const Jobs = ({ jobs = [], talent = [], company = [] }) => {
  return (
    <>
      <Navbar talent={talent} company={company} />
      <Section style={{ marginTop: "70px" }}>
        <Header style={{ fontSize: "40px" }}>
          {" "}
          Explore our list of companies{" "}
        </Header>
        <Subheader>
          {" "}
          Some description to describe this and stufff idk hww{" "}
        </Subheader>
      </Section>
      <JobGrid post={jobs} />
    </>
  );
};

export default Jobs;
