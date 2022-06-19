import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { Section } from "./styled-components/Components";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          marginTop: "90px",
          borderTop: "2px solid var(--Dark)",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <SocialLinks>
            <a
              href="https://instagram.com/probably.xyz?igshid=YmMyMTA2M2Y"
              rel="noreferrer"
              target="_blank"
            >
              <SocialItems> Instagram </SocialItems>
            </a>
            <a
              href="https://twitter.com/probablyxyz?s=20&t=BnskDFzlXvegK63jXeidUQ"
              target="_blank"
              rel="noreferrer"
            >
              <SocialItems>Twitter</SocialItems>
            </a>
            <a
              href="https://www.linkedin.com/company/probablyxyz/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialItems>LinkedIn</SocialItems>
            </a>
            <a href="mailto:support@prbly.xyz" target="_blank" rel="noreferrer">
              <SocialItems>Support</SocialItems>
            </a>
          </SocialLinks>

          <Link href="/">
            <FooterImage src="/Prbly.png" />
          </Link>

          <SocialLinksTwo>
            <Link href="/jobs">
              <SocialItems> Jobs </SocialItems>
            </Link>
            <Link href="/talent">
              <SocialItems> Talent </SocialItems>
            </Link>{" "}
            <Link href="/companies">
              <SocialItems> Companies </SocialItems>
            </Link>{" "}
            <Link href="/blog">
              <SocialItems> Blog </SocialItems>
            </Link>
          </SocialLinksTwo>
        </div>

        <Section>
          <h3> © Copyright 2022 Probably </h3>
        </Section>

        {/* <FooterCon>
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
        </FooterCon> */}
      </footer>
    </>
  );
};

export default Footer;
