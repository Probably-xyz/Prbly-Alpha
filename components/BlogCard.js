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

const BlogCard = ({ topicPost }) => {
  const { text, shortText, numbering, media } = topicPost.fields;
  return (
    <>
      <BlogCardComp>
        <div
          style={{
            width: "400px",
            height: "220px",
            background: "grey",
            outline: "3px solid black",
          }}
        ></div>
        <BlogBadge> Crypto </BlogBadge>
        <BlogContent>
          <h1>What Moves Crypto</h1>
          <p>
            {" "}
            Several factors determine how the crypto market moves and although
            they are sometimes unpredictable we still can get a somewhat close
            understanding or forecast of how things work.
          </p>
        </BlogContent>
      </BlogCardComp>
    </>
  );
};

BlogCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  intro: PropTypes.string,
};

export default BlogCard;
