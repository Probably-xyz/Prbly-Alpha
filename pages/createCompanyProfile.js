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

import CompanyForm from "@/components/CompanyForm";
import axios from "axios";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

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

  return {
    props: {
      company: JSON.parse(JSON.stringify(company)),
      talent: JSON.parse(JSON.stringify(talent)),
    },
  };
}

const createCompanyProfile = ({ company = [], talent = [] }) => {
  const addCompany = (data) => axios.post("/api/companies", data);
  return (
    <>
      {/* {talent ? (
        <h1> GET OUTTA HERE </h1>
      ) : company ? (
        <h1> GET OUTTA HERE </h1>
      ) : ( */}
      <>
        <Navbar />

        <CompanyForm
          buttonText="Submit"
          redirectPath="/"
          onSubmit={addCompany}
        />
      </>
    </>
  );
};

export default createCompanyProfile;
