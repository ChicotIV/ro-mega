import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineArchiveBox,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiCalendarDays,
} from "react-icons/hi2";

import { TbDiscountCheck } from "react-icons/tb";

import { BsTelephone } from "react-icons/bs";
import { AiOutlineForward } from "react-icons/ai";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--text-color-dark);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--background-color-white);
    background-color: var(--text-color-dark);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <HiOutlineHome />
            <span>Acasa</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/produse">
            <HiOutlineArchiveBox />
            <span>Produse</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/despre-noi">
            <HiOutlineInformationCircle />
            <span>Despre noi</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/branduri">
            <HiOutlineLightBulb />
            <span>Branduri</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/promotii">
            <TbDiscountCheck />
            <span>Promotii</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/evenimente">
            <HiCalendarDays />
            <span>Evenimente</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/cariere">
            <AiOutlineForward />
            <span>Cariere</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <BsTelephone />
            <span>Contact</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
