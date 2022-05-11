import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import {
  CompanyContent,
  CompanyTitle,
  CompanySub,
  CompanyCardImage,
  JobPostCard,
  TalentCard,
  TalentTitle,
  TalentDesc,
} from "./styled-components/Components";

const TalentCardComp = ({
  id = "",
  image = "",
  name = "",
  bio = "",
  cv = "",
  title = "",
  headline = "",
  twitter = "",
  linkedin = "",
  skills = [],
}) => {
  return (
    <Link href={`/Talent/${id}`}>
      <TalentCard>
        {image ? (
          <CompanyCardImage src={image} alt={name} width={160} height={160} />
        ) : null}
        <div>
          <TalentTitle>{title ?? ""}</TalentTitle>

          <TalentDesc> {headline ?? ""} </TalentDesc>
        </div>
      </TalentCard>
    </Link>
  );

  TalentCardComp.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cv: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    skills: PropTypes.array,
    linkedin: PropTypes.string,
    headline: PropTypes.string,
  };
};

export default TalentCardComp;
