import React from "react";
import { prisma } from "@/lib/prisma";
import BlogGrid from "@/components/BlogGrid";
import NavbarLanding from "@/components/NavbarLanding";
import { getSession } from "next-auth/react";
import Image from "next/image";
import {
  Section,
  Header,
  Subheader,
} from "@/components/styled-components/Components";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const blogs = await prisma.blog.findMany();

  if (!session) {
    return {
      props: {
        blogs: JSON.parse(JSON.stringify(blogs)),
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
      blogs: JSON.parse(JSON.stringify(blogs)),
      talent: JSON.parse(JSON.stringify(talent)),
      company: JSON.parse(JSON.stringify(company)),
    },
  };
}

const Blog = ({ blogs = [], talent = [], company = [] }) => {
  return (
    <>
      <NavbarLanding talent={talent} company={company} />
      <Section style={{ marginTop: "70px" }}>
        <Header style={{ fontSize: "40px" }}>The Blog Title</Header>
        <Subheader>Some description to describe this and stufff idk</Subheader>
      </Section>

      <BlogGrid blogs={blogs} />
    </>
  );
};

export default Blog;
