import PropTypes from "prop-types";
import CompanyCard from "@/components/CompanyCard";
import TalentCardComp from "@/components/TalentCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import { JobPostSection, TalentList } from "./styled-components/Components";

const LandingTalentGrid = ({ talents = [] }) => {
  // const isEmpty = talents.length === 0;

  return (
    <TalentList>
      {talents.map((talents) => (
        <TalentCardComp key={talents.id} {...talents} />
      ))}
    </TalentList>
  );
};

LandingTalentGrid.propTypes = {
  talent: PropTypes.array,
};

export default LandingTalentGrid;
