import styled from "styled-components";
import Image from "next/image";
import Input from "formik";

export const Header = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 50px;
  margin: 0px 0px;
`;

export const Subheader = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 20px;
  margin: 20px 0px;
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
  text-align: center;
`;

export const BadgeList = styled.span`
  display: flex;
  flex-direction: row;
  margin: 5px 0px;
`;

export const BenefitBadge = styled.span`
  background-color: rgba(255, 236, 81, 0.8);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 1px solid var(--Dark);
  font-size: 16px;
  padding: 0px 10px;
  margin-right: 6px;
`;

export const TypeBadge = styled.span`
  background-color: rgba(38, 39, 48, 0.8);
  color: var(--PrimaryBg);
  font-family: "Grotesk Medium";
  border-radius: 0px;
  outline: 1px solid var(--Dark);
  font-size: 16px;
  padding: 0px 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  outline: 5px solid var(--Dark);
  border-radius: 10px;
  width: 700px;
  height: 70px;
`;

export const TitleSearch = styled.input`
  width: 300px;
  height: 70px;
  background-color: transparent;
  border: none !important;
  font-family: "Grotesk Medium";
  font-size: 18px;
  padding: 15px;
`;

export const LocationSearch = styled.input`
  width: 250px;
  height: 70px;
  background-color: transparent;
  border: none !important;
  font-family: "Grotesk Medium";
  font-size: 18px;
  padding: 15px;
`;

export const JobPostSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 30px;
  justify-items: center;
`;

export const JobPostCard = styled.div`
  width: 300px;
  height: 250px;
  outline: 4px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.5s linear;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  &:hover {
    background-color: var(--Accent);
    box-shadow: 10px 10px 0px var(--Dark);
  }
`;

export const FeaturedJobPostCard = styled.div`
  width: 300px;
  height: 250px;
  outline: 4px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.5s linear;
  margin-bottom: 80px;
  cursor: pointer;
  &:hover {
    background-color: var(--Accent);
    box-shadow: 10px 10px 0px var(--Dark);
  }

  &::after {
    content: url("/badge.png");
    width: 55px;
    height: 55px;
    position: relative;
    bottom: 255px;
    left: 265px;
    background-repeat: no-repeat;
  }
`;

export const JobPostContent = styled.ul`
  text-align: left;
  width: 280px;
  list-style-type: none;
  padding: 0px 20px;
`;

export const JobPostCompany = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Bold";
  font-size: 20px;
  margin: 0px;
`;

export const JobPostTitle = styled.h2`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 18px;
  position: relative;
  bottom: 0px;
  margin: 5px 0px; ;
`;

export const JobPostSub = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Light";
  font-size: 14px;
  position: relative;
  bottom: 0px;
  margin: 6px 0px;
`;

export const NewsLetter = styled.div`
  width: 530px;
  height: 450px;
  background-color: var(--Secondary);
  outline: 4px solid var(--Dark);
  margin-top: 70px;
  border-radius: 0px;
  padding: 40px 20px;
  box-shadow: 20px 20px 0px var(--Dark);
  /* position: relative;
  left: 50%;
  transform: translateX(-50%); */
`;

export const NewsLetterTitle = styled(Header)`
  font-size: 35px;
  padding-left: 8px;
`;

export const NewsLetterSub = styled(Subheader)`
  font-size: 18px;
  padding-left: 8px;
`;

export const NewsLetterInput = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 0px;
  border: none;
  background-color: var(--PrimaryBg);
  color: var(--Dark);
  font-size: 18px;
  outline: 3px solid var(--Dark);
  font-family: "Grotesk SemiBold";
  margin: 20px 10px;
  padding: 10px;
`;

export const BlogSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1800px;
  margin-top: 30px;
`;

export const BlogCard = styled.div`
  width: 400px;
  height: 500px;
  outline: 3px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s linear;
  &:hover {
    box-shadow: 10px 10px 0px #000000;
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

export const CompanyCardImage = styled(Image)`
  /* width: 100px;
  height: 100px; */
  border-radius: 0px;
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
  border-radius: 10px;
  /* outline: 5px solid var(--Dark); */
  position: absolute;
  /* left: 50%; */
  /* transform: translateX(50%); */
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
  outline: 5px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: transparent;
  border-radius: 10px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Regular";
  margin-bottom: 60px;
  margin-right: 60px;
  &:hover {
    outline: 5px solid var(--Accent);
  }
`;

export const FormImage = styled.button`
  width: 600px;
  height: 80px;
  outline: 5px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: var(--Accent);
  box-shadow: 10px 10px 0px #000000;
  outline: 5px solid #000;
  border-radius: 10px;
  color: var(--Dark);
  font-size: 20px;
  font-family: "Grotesk Regular";
  margin-bottom: 60px;
  margin-right: 60px;
`;

export const FormTextArea = styled.textarea`
  width: 600px;
  height: 220px;
  outline: 5px solid var(--Dark);
  border: none !important;
  padding: 20px 20px;
  background-color: transparent;
  border-radius: 10px;
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
`;

export const TalentCard = styled.div`
  width: 1000px;
  height: 200px;
  outline: 5px solid var(--Dark);
  border-radius: 0px;
  transition: all 0.3s linear;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  &:hover {
    box-shadow: 10px 10px 0px #000000;
    outline: 5px solid #000;
  }
`;

export const TalentTitle = styled.h1`
  color: var(--Dark);
  font-family: "Grotesk Medium";
  font-size: 30px;
  position: relative;
  top: 0px;
  margin: 10px 30px;
`;

export const TalentLocation = styled.h3`
  color: var(--Dark);
  font-family: "Grotesk Medium";
  font-size: 16px;
`;

export const TalentDesc = styled.p`
  color: var(--Dark);
  font-family: "Grotesk Regular";
  font-size: 14px;
  /* width: 50%; */
  margin: 10px 30px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
  height: 400px;
  box-shadow: 15px 15px 0px #000000;
  outline: 3px solid #000;
  border-radius: 0px;
  margin-right: 50px;
  margin-left: 50px;
  background-color: var(--Accent);
  cursor: pointer;
  transition: ease-out 0.8s;

  &:hover {
    transform: scale(1.1);
  }
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
