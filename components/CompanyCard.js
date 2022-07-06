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
const CompanyCard = ({
  id = "",
  image = "",
  name = "",
  bio = "",
  size = "",
  industry = "",
  facebook = "",
  twitter = "",
  linkedin = "",
  instagram = "",
  hidden = "",
}) => {
  return (
    <>
      {hidden === false ? (
        <Link href={`/Companies/${id}`}>
          <JobPostCard>
            <CompanyContent>
              {image ? (
                <CompanyCardImage
                  src={image}
                  alt={name}
                  width={60}
                  height={60}
                />
              ) : null}
              <CompanyTitle>{name ?? ""}</CompanyTitle>
              <CompanySub>{bio ?? ""}</CompanySub>
            </CompanyContent>
          </JobPostCard>
        </Link>
      ) : null}
    </>
  );

  CompanyCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
  };
};

export default CompanyCard;
