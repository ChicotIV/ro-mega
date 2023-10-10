import Hero from "../ui/Hero";
import Galery from "../ui/Galery";
import Footer from "../ui/Footer";
import { styled } from "styled-components";
import MediaQuery from "react-responsive";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
`;

function MainPage() {
  return (
    <>
      <StyledMainPage>
        <MediaQuery minWidth={1684}>
          <Hero />
        </MediaQuery>
        <Galery />
      </StyledMainPage>
      <Footer />
    </>
  );
}

export default MainPage;
