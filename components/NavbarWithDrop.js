import Head from "next/head";
import Image from "next/image";
import React, { setState, useState, state } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavWrapper,
  NavLogo,
  NavLink,
  NavItem,
  NavList,
  NavBtn,
  JobBtn,
  SignIn,
  MobileNavCon,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileLinks,
  MobileItems,
  IconMobile,
  MobileDivider,
} from "@/components/styled-components/Nav";

import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const NavbarWithDrop = ({ talent = [], company = [] }) => {
  const { data: session, status } = useSession();
  const loggedIn = session?.user;
  const isLoadingUser = status === "loading";

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <NavWrapper>
          <Link href="/">
            <NavLogo> Probably </NavLogo>
          </Link>
          <IconMobile onClick={toggle} isOpen={toggle}>
            <FaBars />
          </IconMobile>
          <NavList>
            <NavItem>
              <Link href="/jobs">
                <NavLink className="active">Jobs</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/talent">
                <NavLink> Talent </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/companies">
                <NavLink> Companies </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/blog">
                <NavLink> Blog </NavLink>
              </Link>
            </NavItem>
          </NavList>
          <NavBtn>
            {loggedIn ? (
              <div className="dropdown">
                <button className="dropbtn">
                  Account
                  <div className="icon">
                    {" "}
                    <MdOutlineKeyboardArrowDown />{" "}
                  </div>
                </button>
                <div className="dropdown-content">
                  <a type="button" onClick={() => signOut()}>
                    Sign out
                  </a>
                  {company ? <Link href="/myJobPosts"> Posts </Link> : null}
                  {talent ? (
                    <a style={{ cursor: "not-allowed" }}>
                      {" "}
                      Profile (Coming Soon){" "}
                    </a>
                  ) : company ? (
                    <a style={{ cursor: "not-allowed" }}>
                      {" "}
                      Profile (Coming Soon){" "}
                    </a>
                  ) : null}
                </div>
              </div>
            ) : (
              <SignIn onClick={() => signIn()}> Sign in </SignIn>
              // <JobBtn onClick={() => signIn()}> Sign In </JobBtn>
            )}

            <Link href="/jobOptions">
              {/* <JobBtn> Post a Job </JobBtn> */}
              <button className="pushable">
                <span className="front"> Post a Job </span>
              </button>
            </Link>
          </NavBtn>
        </NavWrapper>
      </Nav>

      <MobileNavCon isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <MobileNavWrapper>
          <MobileItems>
            <Link href="/">
              <MobileLinks className="active"> Home </MobileLinks>
            </Link>
            <Link href="/jobs">
              <MobileLinks> Jobs </MobileLinks>
            </Link>
            <Link href="/talent">
              <MobileLinks> Talent </MobileLinks>
            </Link>
            <Link href="/companies">
              <MobileLinks> Companies </MobileLinks>
            </Link>
            <Link href="/blog">
              <MobileLinks> Blog </MobileLinks>
            </Link>

            <MobileLinks>
              {loggedIn ? (
                <div className="dropdown">
                  <button className="dropbtn">
                    Account
                    <div className="icon">
                      {" "}
                      <MdOutlineKeyboardArrowDown />{" "}
                    </div>
                  </button>
                  <div className="dropdown-content">
                    <a type="button" onClick={() => signOut()}>
                      Sign out
                    </a>
                    {company ? <Link href="/myJobPosts"> Posts </Link> : null}
                    {talent ? (
                      <a style={{ cursor: "not-allowed" }}>
                        {" "}
                        Profile (Coming Soon){" "}
                      </a>
                    ) : company ? (
                      <a style={{ cursor: "not-allowed" }}>
                        {" "}
                        Profile (Coming Soon){" "}
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : (
                <SignIn onClick={() => signIn()}> Sign in </SignIn>
                // <JobBtn onClick={() => signIn()}> Sign In </JobBtn>
              )}
            </MobileLinks>

            <MobileDivider> </MobileDivider>

            <MobileLinks style={{ marginTop: "-70px" }}>
              <Link href="/jobOptions">
                {/* <JobBtn> Post a Job </JobBtn> */}
                <button className="pushableLanding">
                  <span className="frontLanding"> Post a Job </span>
                </button>
              </Link>
            </MobileLinks>
          </MobileItems>
        </MobileNavWrapper>
      </MobileNavCon>
    </>
  );
};

export default NavbarWithDrop;
