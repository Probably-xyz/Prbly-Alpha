import styled from "styled-components";
import Image from "next/image";
import Input from "formik";

export const Header = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 70px;
  margin: 15px 0px;

  @media only screen and (max-width: 1440px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    padding: 0px 10px;
  }
`;

export const HeaderTwo = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 50px;
  margin: 15px 0px;

  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: 40px;
  }
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
  position: relative;
  bottom: 20px;

  @media only screen and (max-width: 1440px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 14px;
    padding: 0px 10px;
  }
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
  z-index: 0;
  margin-top: 5%;
  position: relative;
`;

export const ImageOne = styled.img`
  position: absolute;
  bottom: 250px;
  right: 1643px;

  @media only screen and (max-width: 1440px) {
    bottom: 200px;
    right: 1150px;
  }

  @media only screen and (max-width: 1024px) {
    right: 820px;
    bottom: 250px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const ImageTwo = styled.img`
  position: absolute;
  left: 1555px;
  bottom: 500px;

  @media only screen and (max-width: 1440px) {
    bottom: 455px;
    left: 1147px;
    width: 300px;
  }

  @media only screen and (max-width: 1024px) {
    left: 825px;
    bottom: 550px;
    width: 200px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const ImageOneJob = styled.img`
  position: absolute;
  bottom: 250px;

  @media only screen and (max-width: 1440px) {
    bottom: 200px;
    right: 1270px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
export const ImageTwoJob = styled.img`
  position: absolute;
  left: 1555px;
  bottom: 500px;

  @media only screen and (max-width: 1440px) {
    bottom: 470px;
    left: 1280px;
    width: 250px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
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

  @media screen and (max-width: 1024px) {
    width: 850px;
  }

  @media screen and (max-width: 700px) {
    width: 300px;
    height: 150px;
    flex-direction: column;
  }
`;

export const TitleSearch = styled.input`
  width: 500px;
  height: 70px;
  background-color: var(--PrimaryBg);
  border: none !important;
  font-family: "Grotesk Medium";
  font-size: 22px;
  padding: 15px;

  @media only screen and (max-width: 700px) {
    width: 300px;
    font-size: 18px;
  }
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

  @media only screen and (max-width: 700px) {
    width: 300px;
    font-size: 18px;
  }
`;

export const JobPostSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0fr;
  column-gap: 90px;
  grid-row-gap: 50px;
  margin-top: 0px;
  justify-items: center;
  margin-top: 30px;

  @media screen and (max-width: 1440px) {
    column-gap: 40px;
  }

  @media only screen and (max-width: 1325px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 40px;
    grid-row-gap: 40px;
  }
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
  font-size: 16px;
  position: relative;
  bottom: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
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
    content: url("/mail.png");
    width: 55px;
    height: 55px;
    position: relative;
    bottom: 265px;
    left: 1000px;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 1024px) {
    width: 900px;

    &::after {
      content: url("/mail.png");
      width: 55px;
      height: 55px;
      position: relative;
      left: 800px;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 300px;
    height: 400px;

    &::after {
      display: none;
    }
  }

  @media only screen and (max-width: 320px) {
    width: 285px;
    height: 400px;

    &::after {
      display: none;
    }
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

  @media screen and (max-width: 700px) {
    width: 270px;
    height: 280px;
    margin-top: 50px;
    margin-right: 25px;

    &::after {
      content: url("/Smile.png");
      width: 0px;
      height: 0px;
      position: relative;
      bottom: 65px;
      left: -160px;
      background-repeat: no-repeat;
    }
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLetterTitle = styled(Header)`
  font-size: 35px;

  @media only screen and (max-width: 700px) {
    font-size: 22px;
  }
`;

export const NewsLetterSub = styled(Subheader)`
  font-size: 22px;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
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
  /* margin: 15px 0px; */
  margin: 0px;
  padding: 10px;

  @media only screen and (max-width: 700px) {
    width: 220px;
    margin-top: 20px;
  }
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

  @media only screen and (max-width: 700px) {
    margin: 20px 0px;
  }
`;

export const TalentButton = styled.button`
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

  @media only screen and (max-width: 700px) {
    position: relative;
    top: 160px;
    height: 55px;
    padding: 0px 50px;
    margin: 0px;
    right: 200px;
  }
`;

export const BlogSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 110px;
  grid-row-gap: 0px;
  margin-top: 30px;
  justify-items: center;
  padding: 0px 10px;

  @media only screen and (max-width: 1440px) {
    column-gap: 35px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
  }
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

  @media screen and (max-width: 700px) {
    width: 300px;
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

  @media screen and (max-width: 700px) {
    left: 75px;
  }
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

  @media screen and (max-width: 1320px) {
    padding: 40px 10px;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 10px;
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 10px;
    margin: 0px;
  }
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

  @media only screen and (max-width: 1320px) {
    width: 450px;
  }

  @media only screen and (max-width: 1024px) {
    width: 400px;
  }

  @media only screen and (max-width: 700px) {
    width: 350px;
  }

  @media only screen and (max-width: 320px) {
    width: 250px;
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

  @media only screen and (max-width: 1320px) {
    width: 450px;
  }

  @media only screen and (max-width: 1024px) {
    width: 400px;
  }

  @media only screen and (max-width: 700px) {
    width: 350px;
  }

  @media only screen and (max-width: 320px) {
    width: 280px;
  }
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

  @media only screen and (max-width: 1320px) {
    width: 450px;
  }

  @media only screen and (max-width: 1024px) {
    width: 400px;
  }

  @media only screen and (max-width: 700px) {
    width: 350px;
  }

  @media only screen and (max-width: 320px) {
    width: 280px;
  }
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

  @media only screen and (max-width: 700px) {
    width: 350px;
  }

  @media only screen and (max-width: 320px) {
    width: 280px;
  }
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

  @media only screen and (max-width: 1024px) {
    width: 900px;
  }

  @media only screen and (max-width: 700px) {
    width: 300px;
    margin-right: 35px;
  }
`;

export const TalentContent = styled.div`
  margin: 0px 30px;
  width: 900px;

  @media only screen and (max-width: 700px) {
    width: 300px;
  }
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

  @media only screen and (max-width: 768px) {
    width: 350px;
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 375px) {
    width: 300px;
    margin-bottom: 100px;
  }
`;

export const FormRadioControl = styled.div`
  display: flex;
  width: 500px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 1320px) {
    width: 350px;
  }

  @media screen and (max-width: 1024px) {
    width: 350px;
  }
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

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
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
