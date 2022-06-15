import React from "react";
import Navbar from "@/components/Navbar";
import {
  FormContainer,
  FormColumn,
  PostForm,
  FormInput,
  FormTextArea,
  FormLabel,
  Button,
} from "@/components/styled-components/Components";
import TalentForm from "@/components/TalentForm";
import axios from "axios";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const company = await prisma.company.findUnique({
    where: {
      userId: user.id,
    },
  });

  const talent = await prisma.talent.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      company: JSON.parse(JSON.stringify(company)),
      talent: JSON.parse(JSON.stringify(talent)),
    },
  };
}

const createTalentProfile = ({ company = [], talent = [] }) => {
  const addTalent = (data) => axios.post("/api/talent", data);
  return (
    <>
      <Navbar company={company} talent={talent} />
      {/* {talent ? (
        <h1> GET OUTTA HERE </h1>
      ) : company ? (
        <h1> GET OUTTA HERE </h1>
      ) : ( */}
      <TalentForm buttonText="Submit" redirectPath="/" onSubmit={addTalent} />
      {/* )} */}
    </>
  );
};

export default createTalentProfile;
