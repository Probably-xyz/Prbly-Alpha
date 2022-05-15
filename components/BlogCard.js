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
  BenefitBadge,
  TypeBadge,
} from "@/components/styled-components/Components";
import PropTypes from "prop-types";

const BlogCard = ({
  id = "",
  image = "",
  title = "",
  intro = "",
  author = "",
  content = "",
  date = "",
  category = "",
}) => {
  return (
    <>
      <BlogSection>
        <BlogCardComp>
          {image ? (
            <Image src={image} alt={title} width={400} height={250} />
          ) : null}
          <Header
            style={{
              fontSize: "28px",
              paddingTop: "20px",
              paddingLeft: "20px",
            }}
          >
            {title ?? ""}
          </Header>
          <Subheader style={{ fontSize: "18px", padding: "0 20px" }}>
            {intro ?? ""}
          </Subheader>
          <BadgeList
            style={{
              paddingLeft: "20px",
            }}
          >
            <BenefitBadge> {category ?? ""} </BenefitBadge>
            <TypeBadge> {author ?? ""} </TypeBadge>
          </BadgeList>

          <Subheader
            style={{
              fontSize: "20px",
              padding: "0 20px",
              color: "var(--Accent)",
              fontFamily: "Grotesk Medium",
            }}
          >
            - Read More
          </Subheader>
        </BlogCardComp>
      </BlogSection>
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
