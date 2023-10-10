import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "../ui/Footer";

const StyledContainer = styled.div`
  display: flex;
`;

const PromotieMahr = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: inherit;
  margin: 0 auto;
  padding: 6.4rem;
`;

function Promotii() {
  return (
    <>
      <StyledContainer>
        <PromotieMahr to="mahr">
          <img src="/images/mahr.jpg" alt="mahr.jpg" />
          <h1>Promotie Mahr</h1>
        </PromotieMahr>
      </StyledContainer>
      <Footer />
    </>
  );
}

export default Promotii;
