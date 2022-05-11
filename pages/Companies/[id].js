/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "@/components/Navbar";
import {
  Section,
  Header,
  Subheader,
  NewsLetter,
  NewsLetterTitle,
  NewsLetterSub,
} from "@/components/styled-components/Components";
import {
  CompanyIntro,
  CompanyExtraInfo,
  CompanySocials,
} from "@/components/styled-components/Slug";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

const ListedCompany = (company = null) => {
  return (
    <>
      <Navbar />
      <CompanyIntro>
        {company?.image ? (
          <Image
            src={company.image}
            width={210}
            height={210}
            style={{ borderRadius: "15px" }}
          />
        ) : null}
        <CompanyExtraInfo style={{ paddingLeft: "30px" }}>
          <h1> {company?.name ?? ""} </h1>
          <h5 style={{ position: "relative", bottom: "25px" }}>
            {company?.intro ?? ""}
          </h5>
          <CompanySocials>
            <li> H</li>
            <li> h </li>
            <li> h </li>
            <li> h </li>
          </CompanySocials>
        </CompanyExtraInfo>
      </CompanyIntro>
      <CompanyIntro>
        <p> {company?.bio ?? ""} </p>
      </CompanyIntro>
    </>
  );
};

export async function getStaticPaths() {
  const companies = await prisma.company.findMany({
    select: { id: true },
  });

  return {
    paths: companies.map((company) => ({
      params: { id: company.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const company = await prisma.company.findUnique({
    where: { id: params.id },
  });

  if (company) {
    return {
      props: JSON.parse(JSON.stringify(company)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default ListedCompany;
