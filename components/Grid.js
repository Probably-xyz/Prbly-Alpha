import PropTypes from "prop-types";
import CompanyCard from "@/components/CompanyCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection, Section } from "./styled-components/Components";
import { useState } from "react";

const Grid = ({ companies = [] }) => {
  const isEmpty = companies.length === 0;
  const [elNumber, setElNumber] = useState(1);

  const companyFiltered = companies.slice(0, elNumber);

  const lazyLoad = () => {
    setElNumber(elNumber + elNumber);
  };

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
    <Section>
      <JobPostSection>
        {companyFiltered.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </JobPostSection>
      <button
        onClick={() => lazyLoad()}
        className="pushableLanding"
        style={{ marginTop: "60px" }}
      >
        <span className="frontLanding"> Load More...</span>
      </button>
    </Section>
  );
};

Grid.propTypes = {
  companies: PropTypes.array,
};

export default Grid;
