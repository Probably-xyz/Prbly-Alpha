import PropTypes from "prop-types";
import CompanyCard from "@/components/CompanyCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection } from "./styled-components/Components";

const Grid = ({ companies = [] }) => {
  const isEmpty = companies.length === 0;

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
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
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
      {companies.map((company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </JobPostSection>
  );
};

Grid.propTypes = {
  companies: PropTypes.array,
};

export default Grid;
