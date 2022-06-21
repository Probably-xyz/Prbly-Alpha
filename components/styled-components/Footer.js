import styled from "styled-components";

export const FooterCon = styled.div`
  height: 650px;
  display: block;
  background-color: #19191e;
  margin-top: 80px;
  outline: 1px solid black;
`;

export const FooterImage = styled.img`
  width: 105px;
  height: 105px;
  z-index: 10000;
  display: inline;
  margin-left: 80px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media only screen and (max-width: 1440px) {
    margin-left: 60px;
  }

  @media only screen and (max-width: 1024px) {
    width: 80px;
    height: 80px;
    margin-left: 85px;
  }

  @media only screen and (max-width: 700px) {
    position: relative;
    bottom: 150px;
    left: 100px;
  }
`;

export const FooterTitle = styled.h1`
  font-size: 50px;
  font-family: "Grotesk Bold";
  color: var(--PrimaryBg);
  position: relative;
  top: 45px;
  left: 60px;
`;

export const NewsLetterCon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: -65px 100px;
  flex-direction: column;
  float: right;
`;

export const NewsLetterTitle = styled.h1`
  font-size: 35px;
  font-family: "Grotesk Regular";
  color: var(--PrimaryBg);
  position: relative;
`;

export const NewsLetterInput = styled.input`
  background-color: var(--PrimaryBg);
  font-size: 22px;
  width: 380px;
  height: 60px;
  color: var(--Dark);
  font-family: "Grotesk Medium";
  outline: 3px solid var(--Dark);
  box-shadow: 15px 15px 0px var(--Secondary);
  border: none;
  padding: 15px;
  margin-bottom: 50px;
  margin-left: -10px;
`;

export const SocialLinks = styled.ul`
  display: flex;
  float: left;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    float: none;
  }
`;

export const SocialLinksTwo = styled.ul`
  display: flex;
  float: right;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SocialItems = styled.p`
  margin-right: 120px;
  color: var(--Dark);
  font-family: "Grotesk Medium";
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--Accent);
  }

  @media only screen and (max-width: 1440px) {
    margin-right: 65px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    margin-right: 25px;
  }
`;

export const DividerLeft = styled.div`
  height: 2px;
  width: 40%;
  background-color: var(--PrimaryBg);
  float: left;
  position: relative;
  top: 100px;
`;

export const DividerRight = styled.div`
  height: 2px;
  width: 40%;
  background-color: var(--PrimaryBg);
  float: right;
  position: relative;
  top: 96.7px;
`;
