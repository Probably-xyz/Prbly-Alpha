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
import { useState } from "react";

const LandingJobGrid = ({ post = [], result = [] }) => {
  const isEmpty = post.length === 0;

  return isEmpty ? null : (
    <JobPostSection>
      {post.map((post) => (
        <JobCard key={post.id} {...post} />
      ))}
    </JobPostSection>
  );
};

LandingJobGrid.propTypes = {
  post: PropTypes.array,
  result: PropTypes.array,
};

export default LandingJobGrid;
