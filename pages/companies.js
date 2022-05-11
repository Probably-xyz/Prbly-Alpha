import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";
import {
  Section,
  Header,
  Subheader,
} from "@/components/styled-components/Components";

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
      <Grid companies={companies} />
    </>
  );
};

export default Companies;
