import styled from "styled-components";

export const FooterCon = styled.div`
  height: 650px;
  display: block;
  background-color: #19191e;
  margin-top: 80px;
  outline: 1px solid black;
`;

export const FooterImage = styled.img`
  width: 100px;
  height: 100px;
  z-index: 10000;
  display: inline;
  margin-left: 80px;
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
`;

export const SocialLinksTwo = styled.ul`
  display: flex;
  float: right;
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
