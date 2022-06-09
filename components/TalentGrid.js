import PropTypes from "prop-types";
import CompanyCard from "@/components/CompanyCard";
import TalentCardComp from "@/components/TalentCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection, TalentList } from "./styled-components/Components";
import { useState } from "react";

const TalentGrid = ({ talents = [] }) => {
  // const isEmpty = talents.length === 0;

  const [elNumber, setElNumber] = useState(1);

  const talentFiltered = talents.slice(0, elNumber);

  const lazyLoad = () => {
    setElNumber(elNumber + elNumber);
  };

  return (
    <>
      <TalentList>
        {talentFiltered.map((talents) => (
          <TalentCardComp key={talents.id} {...talents} />
        ))}
      </TalentList>
      <button onClick={() => lazyLoad()} className="pushableLanding">
        <span className="frontLanding"> Load More...</span>
      </button>
    </>
  );
};

TalentGrid.propTypes = {
  talent: PropTypes.array,
};

export default TalentGrid;
