import styled from "styled-components";
import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--background-color-white);
  padding: 3.2rem;

  grid-row: 1 / -1;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;

function Sidebar() {
  const sidebarStyle = {
    padding: "3.2rem",
  };

  return (
    <StyledSidebar style={sidebarStyle}>
      <Logo />
      <Navigation />
    </StyledSidebar>
  );
}

export default Sidebar;
