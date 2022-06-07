import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  LandingText,
  HeaderTwo,
  Section,
  LandingSub,
  Subheader,
} from "@/components/styled-components/Components";
import {
  BlogContainer,
  BlogContent,
  BlogDate,
} from "@/components/styled-components/Slug";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: { blogPost: items[0] },
  };
}

const BlogSlug = ({ blogPost }) => {
  const {
    title,
    intro,
    category,
    thumbnail,
    content,
    contentImage,
    date,
    slug,
  } = blogPost.fields;

  return (
    <>
      <Navbar />

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <Section>
          <HeaderTwo> {title} </HeaderTwo>
          <Subheader style={{ width: "750px", textAlign: "center" }}>
            {intro}
          </Subheader>
        </Section>
      </section>

      <Section>
        <BlogContainer>
          <div className="blog-img">
            <Image
              src={"https:" + thumbnail.fields.file.url}
              width={1200}
              height={350}
            />
          </div>

          <BlogDate>{date}</BlogDate>

          <BlogContent> {documentToReactComponents(content)} </BlogContent>
        </BlogContainer>
      </Section>
    </>
  );
};

export default BlogSlug;
