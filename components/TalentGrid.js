import PropTypes from "prop-types";
import CompanyCard from "@/components/CompanyCard";
import TalentCardComp from "@/components/TalentCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection, TalentList } from "./styled-components/Components";

const TalentGrid = ({ talents = [] }) => {
  // const isEmpty = talents.length === 0;

  return (
    <TalentList>
      {talents.map((talents) => (
        <TalentCardComp key={talents.id} {...talents} />
      ))}
    </TalentList>
  );
};

TalentGrid.propTypes = {
  talent: PropTypes.array,
};

export default TalentGrid;
