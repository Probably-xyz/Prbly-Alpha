import styled from "styled-components";
import Link from "next/link";
// import { Button } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 100;
  /* position: sticky; */
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0px 10px;
  max-width: 100vw;
`;

export const NavLogo = styled.p`
  color: var(--Dark);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Grotesk Bold";
  font-weight: bolder;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--Accent);
  }
`;

export const SignIn = styled.a`
  color: var(--Dark);
  display: flex;
  /* align-items: center; */
  /* text-decoration: none; */
  padding: 1.7rem 2.5rem;
  height: 100%;
  cursor: pointer;
  font-family: "Grotesk Medium";
  font-size: 20px;
  transition: 0.3s ease-in-out;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -205px;
  /* outline: 3px solid var(--Dark); */
  border-radius: 0px;
  padding: 10px;

  @media screen and (max-width: 1440px) {
    margin-right: -100px;
  }

  @media screen and (max-width: 1024px) {
    margin-right: -45px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLink = styled.p`
  color: var(--Dark);
  display: flex;
  /* align-items: center; */
  /* text-decoration: none; */
  padding: 1.2rem 3rem;
  height: 100%;
  cursor: pointer;
  font-family: "Grotesk Medium";
  font-size: 20px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 1440px) {
    padding: 1.2rem 2.2rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1.3rem 1.5rem;
    font-size: 16px;
  }

  &:hover {
    transform: scale(1.1);
    color: var(--Accent);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const JobBtn = styled.button`
  color: var(--Dark);
  font-size: 18px;
  font-family: "Grotesk Bold";
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  text-decoration: none;
  background-color: var(--Accent);
  /* outline: 2px solid #000; */
  box-shadow: 7px 10px 0px #000000;
  padding: 15px 40px;
  margin-right: 20px;
`;

export const LoginBtn = styled.select`
  color: var(--Dark);
  font-size: 15px;
  font-family: "Grotesk Bold";
  border: none;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  text-decoration: none;
  background-color: transparent;
  padding: 20px 30px;
  margin-right: 20px;
`;

export const MobileNavCon = styled.aside`
  display: none;
  @media only screen and (max-width: 768px) {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: var(--PrimaryBg);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--Accent);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: #fff;
`;

export const MobileItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 500px);
  text-align: center;
  position: relative;
  right: 5%;
  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(5, 100px);
  }
`;

export const MobileLinks = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  font-family: "Grotesk Medium";
  transition: 0.3s ease-in-out;
  color: var(--Dark);
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

export const IconMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: var(--Accent);
    z-index: -1px;
  }
`;

export const MobileDivider = styled.div`
  width: 300%;
  margin-left: -25px;
  height: 5px;
  outline: 1px solid var(--Dark);
  background-color: var(--Accent);
  position: relative;
  bottom: 150px;
`;
