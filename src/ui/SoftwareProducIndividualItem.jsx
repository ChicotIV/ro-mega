import { styled } from "styled-components";
import ContactForm from "./ContactForm";
import CarouselWithZoom from "./CarouselWithZoom";
import Footer from "./Footer";
import { useEffect } from "react";

const StyledContainer = styled.div`
  display: flex;
  max-width: 100vw;

  @media (max-width: 1092px) {
    flex-direction: column;
    gap: 9rem;
  }
`;

const StyledTextContaier = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledH1 = styled.h1`
  @media (max-width: 660px) {
    margin: 0 auto;
  }
`;
const StyledText = styled.p`
  font-size: 1.1rem;
  @media (max-width: 534px) {
    margin: 0 auto;
  }
`;
function SoftwareProducIndividualItem({ data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StyledContainer>
        <CarouselWithZoom images={data.images} />
        <StyledTextContaier>
          <StyledH1>{data.name}</StyledH1>
          <StyledText>{data.description}</StyledText>
          <ContactForm />
        </StyledTextContaier>
      </StyledContainer>
      <Footer />
    </>
  );
}

export default SoftwareProducIndividualItem;
