import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

import {
  CompanyContent,
  CompanyTitle,
  CompanySub,
  CompanyCardImage,
  JobPostCompany,
  JobPostTitle,
  JobPostSub,
  JobContent,
  JobPostCard,
  TalentCard,
  TalentTitle,
  TalentDesc,
  BadgeList,
  BenefitBadge,
  TypeBadge,
  FeaturedJobPostCard,
  CategoryBadge,
} from "./styled-components/Components";
const JobCard = ({
  id = "",
  image = "",
  title = "",
  location = "",
  salary = "",
  type = "",
  description = "",
  benefits = [],
  category = "",
  companyName = "",
  industry = "",
  intro = "",
  featured = "",
  approved = "",
}) => {
  return (
    <>
      {approved === true ? (
        <Link href={`/Jobs/${id}`}>
          {featured === true ? (
            <FeaturedJobPostCard>
              <JobContent>
                {image ? (
                  <CompanyCardImage
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                  />
                ) : null}
                <JobPostCompany>{companyName ?? ""}</JobPostCompany>
                <JobPostTitle>{title ?? ""}</JobPostTitle>
                <BadgeList>
                  <BenefitBadge> {benefits[0] ?? ""} </BenefitBadge>
                  <TypeBadge> {type ?? ""} </TypeBadge>
                </BadgeList>
                <BadgeList>
                  <CategoryBadge> {category ?? ""} </CategoryBadge>
                </BadgeList>
              </JobContent>
            </FeaturedJobPostCard>
          ) : (
            <JobPostCard>
              <JobContent>
                {image ? (
                  <CompanyCardImage
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                  />
                ) : null}
                <JobPostCompany>{companyName ?? ""}</JobPostCompany>
                <JobPostTitle>{title ?? ""}</JobPostTitle>
                <BadgeList>
                  <BenefitBadge> {benefits[0] ?? ""} </BenefitBadge>
                  <TypeBadge> {type ?? ""} </TypeBadge>
                </BadgeList>
                <BadgeList>
                  <CategoryBadge> {category ?? ""} </CategoryBadge>
                </BadgeList>
              </JobContent>
            </JobPostCard>
          )}
        </Link>
      ) : null}
    </>
  );

  JobCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    salary: PropTypes.string,
    companyName: PropTypes.string.isRequired,
  };
};

export default JobCard;
