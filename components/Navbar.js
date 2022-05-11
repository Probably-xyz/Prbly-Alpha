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

const Navbar = ({ talent = [], company = [] }) => {
  const { data: session, status } = useSession();
  const loggedIn = session?.user;
  const isLoadingUser = status === "loading";

  return (
    <Nav>
      <NavWrapper>
        <Link href="/">
          <NavLogo> Probably </NavLogo>
        </Link>
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
            <Link href="/">
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

export default Navbar;
