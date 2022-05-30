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
  BadgeList,
  BenefitBadge,
  TypeBadge,
  TalentList,
  TalentContent,
} from "./styled-components/Components";

const TalentCardComp = ({
  id = "",
  image = "",
  name = "",
  bio = "",
  cv = "",
  title = "",

  twitter = "",
  linkedin = "",
  status = "",
}) => {
  return (
    <Link href={`/Talent/${id}`}>
      <TalentCard>
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "220px",
              height: "220px",
              outline: "3px solid var(--Dark)",
            }}
          />
        ) : null}
        <TalentContent>
          <TalentTitle>{title ?? ""}</TalentTitle>
          <BadgeList>
            <BenefitBadge>{status ?? ""}</BenefitBadge>
          </BadgeList>
          <TalentDesc> {bio ?? ""} </TalentDesc>
        </TalentContent>
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
