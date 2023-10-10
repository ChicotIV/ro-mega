import { styled } from "styled-components";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";

const StyledInformationRow = styled.div`
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-content: center;
  margin: 0 auto;

  @media (max-width: 512px) {
  }
`;

const StyledParagraph = styled.div`
  font-size: 0.8rem;
  align-self: center;
`;

const MediaQuery660px = styled.div`
  @media (width <= 620px) {
    gap: 1.2rem;
  }
`;

const StyledIcon = styled.div`
  align-self: end;
  justify-self: end;
  line-height: 0;
`;

const MediaQuery = styled.div`
  display: flex;

  margin: 0 auto;

  @media (width <= 1652px) {
    display: flex;
    flex-direction: column;
  }
`;

function HeaderInformation() {
  return (
    <MediaQuery>
      <StyledInformationRow>
        <StyledIcon>
          <HiClock />
        </StyledIcon>

        <StyledParagraph>Program de lucru:</StyledParagraph>
        <StyledParagraph>Luni-Vineri:9AM-5PM</StyledParagraph>
      </StyledInformationRow>

      <StyledInformationRow>
        <StyledIcon>
          <HiLocationMarker />
        </StyledIcon>
        <MediaQuery660px>
          <StyledParagraph>
            Adresă: Ilfov, 077190, Hyperion Towers,
          </StyledParagraph>
          <StyledParagraph>
            Oraș Voluntari, Bulevardul Pipera, Nr. 1/VI
          </StyledParagraph>
        </MediaQuery660px>
      </StyledInformationRow>

      <StyledInformationRow>
        <StyledIcon>
          <HiPhone />
        </StyledIcon>
        <StyledParagraph>Contact:</StyledParagraph>
        <StyledParagraph>+ 40 (21) 255.25.08</StyledParagraph>
      </StyledInformationRow>
    </MediaQuery>
  );
}

export default HeaderInformation;
