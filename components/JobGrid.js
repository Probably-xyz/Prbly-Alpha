import PropTypes from "prop-types";
import JobCard from "@/components/JobCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection } from "./styled-components/Components";

const JobGrid = ({ post = [], result = [] }) => {
  const isEmpty = result.length === 0;

  return isEmpty ? (
    <JobPostSection>
      {post.map((post) => (
        <JobCard key={post.id} {...post} />
      ))}
    </JobPostSection>
  ) : (
    <JobPostSection>
      {result.map((result) => (
        <JobCard key={result.id} {...result} />
      ))}
    </JobPostSection>
  );
};

JobGrid.propTypes = {
  post: PropTypes.array,
  result: PropTypes.array,
};

export default JobGrid;
