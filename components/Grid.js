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

  return (
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
