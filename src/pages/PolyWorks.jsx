import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 6.4rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const ImgContainer = styled.div``;

const StyledVideoContainer = styled.div`
  height: 60vh;
`;

function PolyWorks() {
  return (
    <StyledContainer>
      <ImgContainer>
        <img src="/images/Polyworks.jpg" alt="polyworks logo" />
      </ImgContainer>
      <div style={{ fontSize: "1.4rem" }}>
        Fondată în 1994, cu sediul în Quebec, QC, Canada, și filiale la nivel
        mondial, InnovMetric Software Inc. este lider în furnizarea de soluții
        universale de software pentru metrologie 3D. Cele mai mari organizații
        de producție industrială din lume (Toyota, GM, Volkswagen, Honda, BMW,
        Daimler, Ford, Rolls-Royce, Pratt & Whitney, Boeing, Embraer,
        Bombardier, Apple și multe altele) au încredere în soluțiile software
        PolyWorks® ale InnovMetric și în serviciile conexe pentru a beneficia de
        tehnologia de măsurare 3D în aplicațiile de fabricație și inginerie.
      </div>
      <a
        href="www.innovmetric.com"
        style={{ fontSize: "1.4rem", textDecoration: "none", color: "inherit" }}
      >
        www.innovmetric.com
      </a>
      <StyledVideoContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/n-NprWwxN5A?si=v1XF5u8Ruj9i5BN4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </StyledVideoContainer>
    </StyledContainer>
  );
}

export default PolyWorks;
