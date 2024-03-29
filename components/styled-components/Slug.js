import styled from "styled-components";

export const Container = styled.div`
  outline: 3px solid var(--Dark);
  padding: 30px;
  width: 1300px;
  margin: 0px 100px;
  margin-top: 100px;
  margin-bottom: 0px;

  @media screen and (max-width: 1440px) {
    width: 900px;
    margin: 0px 60px;
    margin-top: 60px;
  }

  @media only screen and (max-width: 1024px) {
    width: 750px;
    margin: 0 10px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 500px) {
    width: 350px;
    padding: 15px;
  }

  @media only screen and (max-width: 320px) {
    width: 295px;
    padding: 15px;
  }
`;

export const BlogContainer = styled.div`
  outline: 3px solid var(--Dark);
  padding: 0px;
  margin: 80px 0px;
  width: 1200px;

  @media only screen and (max-width: 1024px) {
    width: 900px;
  }

  @media only screen and (max-width: 768px) {
    width: 350px;
  }

  @media only screen and (max-width: 350px) {
    width: 310px;
  }
`;

export const BlogContent = styled.div`
  width: 1150px;
  padding: 0px 20px;

  @media screen and (max-width: 1024px) {
    width: 900px;
  }

  @media only screen and (max-width: 768px) {
    width: 350px;
  }

  @media only screen and (max-width: 350px) {
    width: 310px;
  }
`;

export const BlogDate = styled.div`
  display: block;
  padding: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  font-family: "Grotesk Medium";
  color: var(--Dark);

  &::before {
    content: url("/Template.png");
    position: relative;
    top: 25px;
    right: 10px;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 700px) {
    padding: 20px;
    font-size: 15px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CompanyName = styled.h1`
  position: relative;
  top: 30px;
  margin-left: 30px;

  @media only screen and (max-width: 700px) {
    top: 0px;
    margin-left: 0px;
  }
`;

export const PostCompanyName = styled.h1`
  margin-left: 30px;
  color: rgba(0, 0, 0, 0.4);
`;

export const JobTitle = styled.h1`
  margin-left: 30px;
`;

export const CompanySocials = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  width: 150px;
  margin: 0px;
  padding: 0px;
`;

export const TalentContent = styled.div`
  width: 1000px;
  height: 100%;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  margin: 0px 100px;
  padding: 15px;

  @media screen and (max-width: 1440px) {
    margin: 0px 40px;
  }

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 700px) {
    width: 295px;
    padding: 15px;
    margin: 50px 0px;
  }
`;

export const TalentIntro = styled.div`
  margin: 0px;
  margin-bottom: 50px;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TalentTitle = styled.div`
  margin: 0px 30px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10px;
  justify-content: space-between;
`;

export const BenefitList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

export const BenefitBadge = styled.span`
  background-color: var(--Accent);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 18px;
  padding: 5px 20px;
  margin-right: 30px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    padding: 5px 15px;
  }
`;

export const SalaryBadge = styled.span`
  background-color: var(--Secondary);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 18px;
  padding: 5px 25px;
  margin-right: 30px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    padding: 5px 15px;
  }
`;

export const OptionBadge = styled.span`
  background-color: var(--Dark);
  color: var(--PrimaryBg);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 18px;
  padding: 5px 25px;
  margin-right: 30px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    padding: 5px 15px;
  }
`;

export const SkillBadge = styled.span`
  background-color: rgba(255, 236, 81, 1);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 1px solid var(--Dark);
  font-size: 18px;
  padding: 0px 20px;
  margin-right: 15px;
  width: 150px;
  height: 30px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    padding: 7px 15px;
  }
`;

export const Divider = styled.div`
  height: 1.5px;
  width: 800px;
  background-color: var(--Dark);
  position: relative;
  left: 0%;
  margin-top: 10px;
`;

export const HiddenContent = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 80px;
  align-items: center;
  filter: blur(0.6);
`;

export const PaymentTalent = styled.div`
  width: 300px;
  height: 150px;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  padding: 0px 0px;
  background-color: var(--Secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 13px 23px 13px -3px rgba(25, 25, 30, 0.2);
  /* margin: 0px 220px;
  /* margin-top: 90px; */

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 220px;
  }

  @media only screen and (max-width: 700px) {
    width: 290px;
    height: 150px;
  }
`;

export const TalentButton = styled.button`
  padding: 10px 25px;
  background-color: var(--Ternary);
  color: var(--Dark);
  outline: 3px solid var(--Dark);
  border: none !important;
  font-family: "Grotesk Bold";
  font-size: 22px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const ApplyToJob = styled.div`
  width: 350px;
  height: 300px;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  /* position: absolute;
  left: 78%;
  bottom: 442px; */
  margin: 0px 40px;
  margin-top: 100px;
  margin-bottom: 0px;
  padding: 2px 20px;
  background-color: var(--Secondary);
  box-shadow: 13px 23px 13px -3px rgba(25, 25, 30, 0.2);

  @media only screen and (max-width: 1440px) {
    margin-top: 70px;
  }

  @media only screen and (max-width: 1024px) {
    height: 380px;
  }

  @media only screen and (max-width: 700px) {
    width: 350px;
    height: 250px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 350px) {
    width: 250px;
    height: 300px;
  }
`;

export const CompanyNewsLetter = styled.div`
  width: 350px;
  height: 400px;
  outline: 3px solid var(--Dark);
  background-color: var(--Secondary);
  border-radius: 0px;
  position: relative;
  left: 1450px;
  bottom: 525px;
  padding: 20px;
  box-shadow: 13px 23px 13px -3px rgba(25, 25, 30, 0.2);

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const CompanyNewsLetterTitle = styled.h1`
  font-family: "Grotesk Bold";
  font-size: 25px;
  color: var(--Dark);

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const NewsLetterInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 0px;
  border: none;
  background-color: var(--PrimaryBg);
  color: var(--Dark);
  font-size: 18px;
  outline: 3px solid var(--Dark);
  font-family: "Grotesk SemiBold";
  margin: 0px;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    width: 250px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 15px;
  }
`;

export const SlugNewsLetterButton = styled.button`
  padding: 0px 25px;
  height: 50px;
  width: 300px;
  background-color: var(--Ternary);
  color: var(--Dark);
  outline: 3px solid var(--Dark);
  border: none !important;
  font-family: "Grotesk Bold";
  font-size: 22px;
  /* margin: 15px 25px; */
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 250px;
  }
`;

export const AtsButton = styled.button`
  padding: 0px 25px;
  height: 50px;
  width: 200px;
  background-color: var(--Ternary);
  color: var(--Dark);
  outline: 3px solid var(--Dark);
  border: none !important;
  font-family: "Grotesk Bold";
  font-size: 22px;
  margin: 15px 50px;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    width: 150px;
    margin: 15px 20px;
  }
`;

export const SlugJobPostSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0fr;
  column-gap: 0px;
  grid-row-gap: 50px;
  margin-top: 25px;
  margin-left: 70px;
  /* justify-items: center; */

  @media screen and (max-width: 1320px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    margin-left: 40px;
    column-gap: 40px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 10px;
    column-gap: 40px;
    row-gap: 50px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
