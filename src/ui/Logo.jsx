import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogo = styled.div`
  /* text-align: left; */
`;

const Img = styled.img`
  height: auto;
  width: auto;
`;

const StyledLink = styled(NavLink)``;

function Logo() {
  return (
    <>
      <StyledLink to="/">
        <StyledLogo>
          <Img src="/images/logo-normal-1.png" alt="logo" />
        </StyledLogo>
      </StyledLink>
    </>
  );
}

export default Logo;
