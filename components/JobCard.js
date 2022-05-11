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
  JobPostContent,
  JobPostCard,
  TalentCard,
  TalentTitle,
  TalentDesc,
  BadgeList,
  BenefitBadge,
  TypeBadge,
  FeaturedJobPostCard,
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
  console.log({ featured });
  return (
    <>
      {approved === true ? (
        <Link href={`/companies/${id}`}>
          {featured === true ? (
            <FeaturedJobPostCard>
              <CompanyContent>
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
                <JobPostSub> {intro ?? ""} </JobPostSub>
                <BadgeList>
                  <BenefitBadge> {benefits[0] ?? ""} </BenefitBadge>
                  <TypeBadge> {type ?? ""} </TypeBadge>
                </BadgeList>
              </CompanyContent>
            </FeaturedJobPostCard>
          ) : (
            <JobPostCard>
              <CompanyContent>
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
                <JobPostSub> {intro ?? ""} </JobPostSub>
                <BadgeList>
                  <BenefitBadge> {benefits[0] ?? ""} </BenefitBadge>
                  <TypeBadge> {type ?? ""} </TypeBadge>
                </BadgeList>
              </CompanyContent>
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
