import Head from "next/head";
import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import {
  Nav,
  NavWrapper,
  NavLogo,
  NavLink,
  NavItem,
  NavList,
  NavBtn,
  JobBtn,
  LoginBtn,
} from "@/components/styled-components/Nav";

import { signOut, getSession, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const NavbarLanding = ({ talent = [], company = [] }) => {
  const { data: session, status } = useSession();
  const loggedIn = session?.user;
  const isLoadingUser = status === "loading";

  return (
    <Nav>
      <NavWrapper>
        <Link href="/">
          <div
            style={{
              height: "100%",
              width: "200px",
              borderRight: "1px solid var(--PrimaryBg)",
            }}
          >
            <NavLogo
              style={{
                color: "var(--PrimaryBg)",
                fontSize: "38px",
              }}
            >
              {" "}
              Probably{" "}
            </NavLogo>
          </div>
        </Link>
        <NavList>
          <NavItem>
            <Link href="/jobs">
              <NavLink style={{ color: "var(--PrimaryBg)" }} className="active">
                Jobs
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/talent">
              <NavLink style={{ color: "var(--PrimaryBg)" }}> Talent </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/companies">
              <NavLink style={{ color: "var(--PrimaryBg)" }}>
                {" "}
                Companies{" "}
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">
              <NavLink style={{ color: "var(--PrimaryBg)" }}> Blog </NavLink>
            </Link>
          </NavItem>
        </NavList>
        <NavBtn
          style={{
            borderLeft: "1px solid var(--PrimaryBg)",
            paddingLeft: "50px",
          }}
        >
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
                {talent ? (
                  <Link href="/random1"> Applied to </Link>
                ) : company ? (
                  <Link href="/random2"> Posts </Link>
                ) : null}
                {talent ? (
                  <Link href="/random1"> Talent Profile </Link>
                ) : company ? (
                  <Link href="/random2"> Company Profile </Link>
                ) : null}
              </div>
            </div>
          ) : (
            <button onClick={() => signIn()} className="pushable">
              <span className="front"> Sign in </span>
            </button>
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
  );
};

export default NavbarLanding;
