import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineArchiveBox,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiCalendarDays,
} from "react-icons/hi2";

import { AiFillCloseCircle } from "react-icons/ai";

import { TbDiscountCheck } from "react-icons/tb";

import { BsTelephone } from "react-icons/bs";
import { AiOutlineForward } from "react-icons/ai";
import MediaQuery from "react-responsive";

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
`;

const Background = styled.div`
  min-height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: var(--background-color-white);

  position: fixed;
  z-index: 1000;
  overflow: hidden;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;
  background-color: var(--background-color-white);
`;

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 2rem;
`;

function ModalWindow({ showModal, setShowModal }) {
  return (
    <Background>
      <Navigation onClick={() => setShowModal(!showModal)}>
        <CloseButton
          onClick={() => setShowModal(!showModal)}
          style={{
            height: "5rem",
            color: "inherit",
            alignSelf: "flex-start",
            padding: "2.5rem",
          }}
        >
          <MediaQuery maxWidth={412}>
            <AiFillCloseCircle size="1.5em" />
          </MediaQuery>
          <MediaQuery minWidth={412}>
            <AiFillCloseCircle size="2.5em" />
          </MediaQuery>
        </CloseButton>
        <StyledNavLink to="/">
          <HiOutlineHome />
          <span>Acasa</span>
        </StyledNavLink>
        <StyledNavLink to="/produse">
          <HiOutlineArchiveBox />
          <span>Produse</span>
        </StyledNavLink>
        <StyledNavLink to="/despre-noi">
          <HiOutlineInformationCircle />
          <span>Despre noi</span>
        </StyledNavLink>
        <StyledNavLink>
          <HiOutlineLightBulb />
          <span>Branduri</span>
        </StyledNavLink>
        <StyledNavLink to="/promotii">
          <TbDiscountCheck />
          <span>Promotii</span>
        </StyledNavLink>
        <StyledNavLink to="/evenimente">
          <HiCalendarDays />
          <span>Evenimente</span>
        </StyledNavLink>

        <StyledNavLink to="/cariere">
          <AiOutlineForward />
          <span>Cariere</span>
        </StyledNavLink>
        <StyledNavLink to="/contact">
          <BsTelephone />
          <span>Contact</span>
        </StyledNavLink>
      </Navigation>
    </Background>
  );
}

export default ModalWindow;
