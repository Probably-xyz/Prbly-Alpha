import PropTypes from "prop-types";
import JobCard from "@/components/JobCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection } from "./styled-components/Components";

const JobGrid = ({ post = [] }) => {
  const isEmpty = post.length === 0;

  return isEmpty ? (
    <div
      style={{
        color: "var(--Dark)",
        width: "350px",
        height: "100px",
        // background: "var(--Accent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ExclamationIcon />
      <h1>
        Nothing to see here{" "}
        <span style={{ color: "var(--Accent)" }}> Yet </span>
      </h1>
    </div>
  ) : (
    <JobPostSection>
      {post.map((post) => (
        <JobCard key={post.id} {...post} />
      ))}
    </JobPostSection>
  );
};

JobGrid.propTypes = {
  post: PropTypes.array,
};

export default JobGrid;
