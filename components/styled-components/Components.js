import styled from "styled-components";
import Image from "next/image";
import Input from "formik";

export const Header = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 70px;
  margin: 15px 0px;
`;

export const HeaderTwo = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 50px;
  margin: 15px 0px;
`;

export const Subheader = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 25px;
  margin: 0px 0px;
`;

export const LandingSub = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 30px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
`;

export const Button = styled.button`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  background-color: var(--Accent);
  font-size: 18px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 7px 10px 0px #000000;
  z-index: 1000px;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 6%; */
  text-align: left;
  justify-content: center;
`;

export const LandingText = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin-top: 10%;
  position: relative;
`;

export const ImageOne = styled.img`
  position: absolute;
  bottom: 250px;
`;
export const ImageTwo = styled.img`
  position: absolute;
  left: 1555px;
  bottom: 500px;
`;

export const BadgeList = styled.span`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

export const BenefitBadge = styled.span`
  background-color: var(--Ternary);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 16px;
  padding: 0px 10px;
  margin-right: 10px;
`;

export const TypeBadge = styled.span`
  background-color: var(--Dark);
  color: var(--PrimaryBg);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 16px;
  padding: 0px 10px;
`;
export const CategoryBadge = styled.span`
  background-color: var(--Secondary);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 16px;
  padding: 0px 10px;
`;

export const FormCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  width: 900px;
  height: 70px;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  width: 1050px;
  height: 70px;
  margin-bottom: 100px;
  margin-top: 40px;
`;

export const TitleSearch = styled.input`
  width: 500px;
  height: 70px;
  background-color: var(--PrimaryBg);
  border: none !important;
  font-family: "Grotesk Medium";
  font-size: 22px;
  padding: 15px;
`;

export const LocationSearch = styled.input`
  width: 500px;
  height: 70px;
  background-color: var(--PrimaryBg);
  border: none !important;
  font-family: "Grotesk Medium";
  font-size: 22px;
  padding: 15px;

  &::before {
    content: url("/badge.png");
    width: 100px;
    height: 100px;
    position: relative;
    bottom: 0;
    left: 10px;
    background-repeat: no-repeat;
  }
`;

export const JobPostSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0fr;
  column-gap: 90px;
  grid-row-gap: 0px;
  margin-top: 30px;
  justify-items: center;
`;

export const CompanySection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0fr;
  column-gap: 90px;
  grid-row-gap: 0px;
  margin-top: 30px;
  justify-items: center;
`;

export const JobPostCard = styled.div`
  width: 300px;
  height: 250px;
  outline: 4px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s ease-in-out;
  margin: 0px;
  padding: 0px;
  cursor: pointer;

  &:hover {
    background-color: var(--Accent);
    box-shadow: 15px 15px 0px var(--Dark);
  }
`;

export const CompanyCardComp = styled.div`
  width: 400px;
  height: 320px;
  outline: 4px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s ease-in-out;
  margin: 0px;
  padding: 0px;
  cursor: pointer;

  &:hover {
    background-color: var(--Accent);
    box-shadow: 15px 15px 0px var(--Dark);
  }
`;

export const FeaturedJobPostCard = styled.div`
  width: 300px;
  height: 250px;
  outline: 4px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 80px;
  cursor: pointer;

  &:hover {
    background-color: var(--Accent);
    box-shadow: 15px 15px 0px var(--Dark);
  }

  &::after {
    content: url("/Favorite.png");
    width: 55px;
    height: 55px;
    position: relative;
    bottom: 245px;
    left: 240px;
    background-repeat: no-repeat;
  }
`;

export const JobPostContent = styled.ul`
  text-align: left;
  width: 300px;
  height: 250px;
  list-style-type: none;
  padding: 0px 20px;
`;

export const JobPostCompany = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 22px;
  margin: 0px 0px;
`;

export const JobPostTitle = styled.h2`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 18px;
  position: relative;
  bottom: 0px;
  margin: 10px 0px;
  margin-bottom: 15px;
`;

export const JobPostSub = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Light";
  font-size: 14px;
  position: relative;
  bottom: 0px;
  margin: 10px 0px;
`;

export const NewsLetter = styled.div`
  width: 1100px;
  height: 220px;
  background-color: var(--Secondary);
  outline: 3px solid var(--Dark);
  margin: 100px 0px;
  border-radius: 0px;
  padding: 5px 25px;
  box-shadow: 13px 23px 13px -3px rgba(25, 25, 30, 0.2);
  &::after {
    content: url("/Mail.png");
    width: 55px;
    height: 55px;
    position: relative;
    bottom: 265px;
    left: 1000px;
    background-repeat: no-repeat;
  }
`;

export const TalentSignUp = styled.div`
  width: 850px;
  height: 150px;
  background-color: var(--Secondary);
  outline: 3px solid var(--Dark);
  margin-top: 10px;
  margin-bottom: 75px;
  border-radius: 0px;
  padding: 5px 25px;
  box-shadow: 13px 23px 13px -3px rgba(25, 25, 30, 0.2);
  display: flex;
  &::after {
    content: url("/Smile.png");
    width: 55px;
    height: 55px;
    position: relative;
    bottom: 45px;
    left: 70px;
    background-repeat: no-repeat;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLetterTitle = styled(Header)`
  font-size: 35px;
`;

export const NewsLetterSub = styled(Subheader)`
  font-size: 22px;
`;

export const NewsLetterInput = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 0px;
  border: none;
  background-color: var(--PrimaryBg);
  color: var(--Dark);
  font-size: 18px;
  outline: 3px solid var(--Dark);
  font-family: "Grotesk SemiBold";
  margin: 15px 0px;
  padding: 10px;
`;

export const NewsLetterButton = styled.button`
  padding: 0px 25px;
  height: 50px;
  background-color: var(--Ternary);
  color: var(--Dark);
  outline: 3px solid var(--Dark);
  border: none !important;
  font-family: "Grotesk Bold";
  font-size: 22px;
  margin: 15px 25px;
  cursor: pointer;
`;

export const BlogSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 30px;
  justify-items: center;
  padding: 0px 10px;
`;

export const BlogCardComp = styled.div`
  width: 400px;
  height: 520px;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  /* padding: 10px 5px; */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 15px 15px 0px #000000;
  }
`;

export const BlogContent = styled.div`
  padding: 0px 10px;
`;

export const BlogBadge = styled.div`
  background-color: var(--Secondary);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 2px solid var(--Dark);
  font-size: 18px;
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 115px;
  top: -20px;
`;

export const CompanyContent = styled.div`
  text-align: left;
  width: 280px;
  height: 230px;
  list-style-type: none;
  padding: 40px 20px;
  overflow: hidden;
  /* text-overflow: ellipsis "[....]"; */
`;

export const JobContent = styled.div`
  text-align: left;
  width: 280px;
  height: 250px;
  list-style-type: none;
  padding: 20px 20px;
  overflow: hidden;
`;

export const CompanyCardImage = styled(Image)`
  /* width: 100px;
  height: 100px; */
  border-radius: 0px;
  border: 10px solid var(--Dark);
`;

export const CompanyTitle = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 22px;
  margin-top: 10px;
`;

export const CompanySub = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Medium";
  font-size: 16px;
  position: relative;
  bottom: 10px;
`;

export const FormContainer = styled.div`
  padding: 40px 40px;
  border-radius: 0px;
  outline: 3px solid var(--Dark);
  margin: 50px 0px;
  box-shadow: 0 0 10px var(--Dark);
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 20px;
`;

export const FormInput = styled.input`
  width: 600px;
  height: 80px;
  outline: 3px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: transparent;
  border-radius: 0px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Regular";
  margin-bottom: 60px;
  margin-right: 60px;
  &:hover {
    outline: 5px solid var(--Accent);
  }
`;

export const FormSelect = styled.select`
  width: 600px;
  height: 80px;
  outline: 3px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: transparent;
  border-radius: 0px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Regular";
  margin-bottom: 60px;
  margin-right: 60px;
`;

export const FormImage = styled.button`
  width: 600px;
  height: 80px;
  outline: 3px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: var(--Accent);
  box-shadow: 10px 10px 0px #000000;
  border-radius: 0px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Medium";
  margin-bottom: 60px;
  margin-right: 60px;
  cursor: pointer;
`;

export const FormTextArea = styled.textarea`
  width: 600px;
  height: 220px;
  outline: 3px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: transparent;
  border-radius: 0px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Regular";
  resize: none;
`;

export const FormLabel = styled.label`
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Medium";
  margin-bottom: 20px;
`;

export const TalentList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const TalentCard = styled.div`
  width: 1070px;
  height: 250px;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  margin-bottom: 35px;
  &:hover {
    box-shadow: 15px 15px 0px #000000;
  }
`;

export const TalentContent = styled.div`
  margin: 0px 30px;
  width: 900px;
`;

export const TalentTitle = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 35px;
  /* margin: 10px 30px; */
`;

export const TalentLocation = styled.h3`
  color: var(--Dark);
  font-family: "Grotesk Medium";
  font-size: 16px;
`;

export const TalentDesc = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 16px;
  /* width: 50%; */
  /* margin: 10px 30px; */
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 55px;
  width: 450px;
  height: 480px;
  box-shadow: 15px 15px 0px #000000;
  outline: 3px solid #000;
  border-radius: 0px;
  margin-right: 50px;
  margin-left: 50px;
  background-color: var(--PrimaryBg);

  transition: ease-out 0.8s;
`;

export const FormRadioControl = styled.div`
  display: flex;
  width: 500px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const RadioControl = styled.input`
  width: 20px;
  border-radius: 5px;
  height: 20px;
  color: var(--Accent);
`;

export const ProfileTitle = styled.h1`
  font-size: 30px;
  font-family: "Grotesk Bold";
  color: var(--Dark);
  margin: -15px 0px;
  padding: 0px 0px;
`;

export const ProfileFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 50px;
  bottom: 0px;
  list-style-type: none;
  width: 900px;
  margin: 10px 0px;
`;

export const FeatureItem = styled.li`
  font-size: 20px;
  color: var(--Dark);
  font-family: "Grotesk Medium";
  display: inline;
  background-image: url("/listIcon.png");
  background-repeat: no-repeat;
  height: 34px;
  padding-left: 50px;
  margin-bottom: 40px;
  /* padding-right: 20px; */

  /* &:before {
    content: url("/listIcon.png");
    position: relative;
    top: 15px;
    margin-right: 10px;
  } */
`;
