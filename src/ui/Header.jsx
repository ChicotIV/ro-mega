import { styled } from "styled-components";

import HeaderInformation from "./HeaderInformation";

const StyledHeader = styled.h1`
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  background-color: var(--background-color-white);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 512px) {
    /* padding: 0; */
    margin: 0 auto;

    align-self: center;
    justify-self: center;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderInformation />
    </StyledHeader>
  );
}

export default Header;
