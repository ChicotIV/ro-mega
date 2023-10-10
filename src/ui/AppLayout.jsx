import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import PhoneNav from "./PhoneNav";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(3, max-content);
  height: 100vh;

  @media (max-width: 1076px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.main`
  padding: 2rem 0 0;
  @media (max-width: 1076px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
`;

const Container = styled.div`
  display: grid;
  max-width: 100vw;
  margin: 0 auto;
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <MediaQuery maxWidth={1076}>
        <PhoneNav />
      </MediaQuery>

      <MediaQuery minWidth={1076}>
        <Sidebar />
      </MediaQuery>

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
