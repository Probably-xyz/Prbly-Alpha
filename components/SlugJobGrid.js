/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import JobCard from "@/components/JobCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import {
  JobPostSection,
  Form,
  FormCon,
  TitleSearch,
  LocationSearch,
} from "./styled-components/Components";
import { SlugJobPostSection } from "./styled-components/Slug";
import { useState } from "react";

const SlugJobGrid = ({ post = [] }) => {
  const isEmpty = post.length === 0;

  return isEmpty ? null : (
    <SlugJobPostSection>
      {post.map((post) => (
        <JobCard key={post.id} {...post} />
      ))}
    </SlugJobPostSection>
  );
};

SlugJobGrid.propTypes = {
  post: PropTypes.array,
  result: PropTypes.array,
};

export default SlugJobGrid;
