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
  TalentContent,
  TalentIntro,
  SkillList,
  Divider,
  SkillBadge,
  HiddenContent,
  PaymentTalent,
} from "@/components/styled-components/Slug";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

const ListedTalent = (talent = null) => {
  return (
    <>
      <Navbar />
      <TalentContent>
        <TalentIntro>
          {talent?.image ? (
            <Image
              src={talent.image}
              width={150}
              height={150}
              style={{ borderRadius: "10px" }}
            />
          ) : null}
          <Header style={{ marginLeft: "50px", fontSize: "40px" }}>
            {talent?.title ?? ""}
            <Subheader style={{ fontFamily: "Grotesk Light" }}>
              {" "}
              {talent?.headline ?? ""}{" "}
            </Subheader>
          </Header>
        </TalentIntro>
        <TalentIntro>
          <SkillList>
            <SkillBadge> {talent?.skills[0] ?? ""} </SkillBadge>
            <SkillBadge> {talent?.skills[1] ?? ""} </SkillBadge>
          </SkillList>
        </TalentIntro>
        <Divider> </Divider>
        <h1> About Me </h1>
        <Subheader> {talent?.bio ?? ""} </Subheader>
      </TalentContent>

      <PaymentTalent>
        <h1> Implement Payment </h1>
        <p> Show hiddent content under about me section </p>
      </PaymentTalent>
    </>
  );
};

export async function getStaticPaths() {
  const talent = await prisma.talent.findMany({
    select: { id: true },
  });

  return {
    paths: talent.map((talent) => ({
      params: { id: talent.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const talent = await prisma.talent.findUnique({
    where: { id: params.id },
  });

  if (talent) {
    return {
      props: JSON.parse(JSON.stringify(talent)),
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default ListedTalent;
