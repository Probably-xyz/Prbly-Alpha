import React from "react";

import Grid from "@/components/Grid";
import NavbarLanding from "@/components/NavbarLanding";
import { getSession } from "next-auth/react";
import Image from "next/image";
import {
  Section,
  Header,
  Subheader,
  BlogSection,
  BlogCardComp,
  BadgeList,
  BlogBadge,
  TypeBadge,
  BlogContent,
} from "@/components/styled-components/Components";
import PropTypes from "prop-types";
import Link from "next/link";

const BlogCard = ({ blogPost }) => {
  const { title, intro, category, thumbnail, content, date, slug } =
    blogPost.fields;
  return (
    <>
      <Link href={`/blogs/` + slug}>
        <BlogCardComp>
          <div
            style={{
              width: "200px",
              height: "220px",
              // background: "grey",
              outline: "3px solid black",
            }}
            className="blog-img"
          >
            <Image
              src={"https:" + thumbnail.fields.file.url}
              width={400}
              height={220}
            />
          </div>

          <div
            style={{
              width: "300px",
              height: "220px",
              // background: "grey",
              outline: "3px solid black",
            }}
            className="blog-img-mobile"
          >
            <Image
              src={"https:" + thumbnail.fields.file.url}
              width={300}
              height={220}
            />
          </div>
          <BlogBadge> {category} </BlogBadge>
          <BlogContent>
            <h2> {title} </h2>
            <p> {intro} </p>
          </BlogContent>
        </BlogCardComp>
      </Link>
    </>
  );
};

// BlogCard.propTypes = {
//   id: PropTypes.number,
//   image: PropTypes.string,
//   title: PropTypes.string,
//   content: PropTypes.string,
//   author: PropTypes.string,
//   date: PropTypes.string,
//   category: PropTypes.string,
//   intro: PropTypes.string,
// };

export default BlogCard;
