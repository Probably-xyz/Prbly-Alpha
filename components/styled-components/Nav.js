import styled from "styled-components";
import Link from "next/link";
// import { Button } from "@chakra-ui/react";

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
  padding: 0px 24px;
  max-width: 100vw;
  border-bottom: 2px solid var(--Dark);
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

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -205px;
  /* outline: 3px solid var(--Dark); */
  border-radius: 0px;
  padding: 10px;
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLink = styled.p`
  color: var(--Dark);
  display: flex;
  /* align-items: center; */
  /* text-decoration: none; */
  padding: 0.8rem 4.5rem;
  height: 100%;
  cursor: pointer;
  font-family: "Grotesk Medium";
  font-size: 20px;
  transition: 0.3s ease-in-out;
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
