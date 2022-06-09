import React from "react";
import Image from "next/image";
import {
  FooterCon,
  FooterImage,
  FooterTitle,
  NewsLetterCon,
  NewsLetterTitle,
  NewsLetterInput,
  SocialLinks,
  SocialLinksTwo,
  DividerLeft,
  DividerRight,
  SocialItems,
} from "./styled-components/Footer";

const Footer = () => {
  return (
    <>
      <footer>
        <FooterCon>
          <FooterTitle> Probably </FooterTitle>
          <FooterImage src="/Prbly.png" />
          <SocialLinks></SocialLinks>
          <NewsLetterCon>
            <NewsLetterTitle>Check out The Sensibility Letter</NewsLetterTitle>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <NewsLetterInput
                type="email"
                placeholder="Enter your email address"
              />
              <button className="pushable">
                <span className="front"> Lets go </span>
              </button>
            </form>
          </NewsLetterCon>

          <SocialLinks></SocialLinks>

          <DividerLeft> </DividerLeft>
          <DividerRight> </DividerRight>

          <SocialLinks>
            <SocialItems> Instagram </SocialItems>
            <SocialItems>Twitter</SocialItems>
            <SocialItems>LinkedIn</SocialItems>
            <SocialItems>Support</SocialItems>
          </SocialLinks>

          <SocialLinksTwo>
            <SocialItems> Jobs </SocialItems>
            <SocialItems> Talent </SocialItems>
            <SocialItems> Companies </SocialItems>
            <SocialItems> Blog </SocialItems>
          </SocialLinksTwo>
        </FooterCon>
      </footer>
    </>
  );
};

export default Footer;
