import React from "react";
import { prisma } from "@/lib/prisma";
import Grid from "@/components/Grid";
import TalentGrid from "@/components/TalentGrid";
import Navbar from "@/components/Navbar";
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
      <TalentGrid talents={talents} />
    </>
  );
};

export default Talent;
