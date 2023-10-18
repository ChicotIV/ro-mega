import { styled } from "styled-components";
import Footer from "../ui/Footer";
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";

const StyledImage = styled.img`
  margin-top: 6.4rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  @media (max-width: 600px) {
    margin-top: 3.2rem;
    max-width: 90vw;
  }
  @media (max-width: 440px) {
    max-width: 80vw;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3.2rem 0 3.2rem 3.2rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1556px) {
    flex-direction: column;
    width: min-content;
    margin: 0 auto;
  }

  @media (max-width: 672px) {
    text-align: center;
  }
`;

const StyledText = styled.div`
  font-size: 1.5rem;
  max-width: 40vw;
  margin-bottom: 1.2rem;
  text-align: center;

  @media (max-width: 1112px) {
    max-width: max-content;
  }
`;

const StyledVideo = styled.div`
  height: 25rem;
  width: 35rem;
  @media (max-width: 648px) {
    width: 90vw;
  }
  @media (max-width: 428px) {
    max-width: 80vw;
  }
`;

const StyledH1 = styled.h1`
  font-size: 1.6rem;
  padding: 3.2rem;
  @media (max-width: 1556px) {
    margin: 0 auto;
  }
`;

const VideoContainer = styled.div`
  display: grid;
  height: max-content;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding: 0 3.2rem 3.2rem 3.2rem;

  max-width: 100vw;
  overflow: hidden;
  @media (max-width: 1580px) {
    grid-template-columns: 1fr;
    width: min-content;
    margin: 0 auto;
  }
  @media (max-width: 624px) {
    max-width: 90vw;
  }
`;

function IndividualBrand({
  name,
  headerImage,
  description,
  list,
  video,
  homeSite,
  videosArray,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const springs1 = useSpring({
    from: { y: 1000 },
    to: { y: 0 },
  });
  const springs2 = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });
  const springs3 = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
  });

  return (
    <>
      <animated.div style={{ ...springs1 }}>
        <div>
          <StyledImage src={headerImage} />
        </div>
      </animated.div>
      <Container>
        <animated.div style={{ ...springs2 }}>
          <div>
            <StyledText>{description}</StyledText>
            {list !== undefined && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.3rem",
                }}
              >
                {list()}
              </div>
            )}
            <a
              href={`https://${homeSite}`}
              style={{
                textDecoration: "none",
                fontSize: "1.3rem",
                color: "inherit",
              }}
            >
              <div style={{ marginTop: "1.2rem" }}>{homeSite}</div>
            </a>
          </div>
        </animated.div>
        <animated.div style={{ ...springs3 }}>
          <StyledVideo>{video()}</StyledVideo>
        </animated.div>
      </Container>

      {videosArray === undefined ? "" : <StyledH1>{name} TV</StyledH1>}

      <VideoContainer>
        {videosArray !== undefined && videosArray()}
      </VideoContainer>
      <Footer />
    </>
  );
}

export default IndividualBrand;
