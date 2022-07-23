import { hover } from "@testing-library/user-event/dist/hover";
import { FaBars, FaStaylinked } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 9;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.8rem;

  &.active {
    color: #15cdfc;
  }
`;

export const navLinkImg = `
  width: 50%
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    transform: translate (-100, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    margin: 2rem;
    z-index: 99;
  }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center:
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const navBtn = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 24,
}

export const socialIcon = {
  margin: '10px 15px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',
  width: 20,
  height: 20,
}