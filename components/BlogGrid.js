import React from "react";

import Grid from "@/components/Grid";
import NavbarLanding from "@/components/NavbarLanding";
import { getSession } from "next-auth/react";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  Section,
  BlogSection,
} from "@/components/styled-components/Components";
import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs = [] }) => {
  return (
    <>
      <BlogSection>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </BlogSection>
    </>
  );
};

BlogGrid.proptypes = {
  blogs: PropTypes.array,
};

export default BlogGrid;
