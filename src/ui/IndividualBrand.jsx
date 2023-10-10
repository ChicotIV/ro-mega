import { styled } from "styled-components";
import Footer from "../ui/Footer";
import { animated, useSpring } from "react-spring";

const StyledImage = styled.img`
  margin-top: 6.4rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3.2rem 0 3.2rem 3.2rem;
`;

const StyledText = styled.div`
  font-size: 1.5rem;
  max-width: 40vw;
  margin-bottom: 1.2rem;
`;

const StyledVideo = styled.div`
  height: 25rem;
  width: 35rem;
`;

const StyledH1 = styled.h1`
  font-size: 1.6rem;
  padding: 3.2rem;
`;

const VideoContainer = styled.div`
  display: grid;
  height: max-content;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding: 0 3.2rem 3.2rem 3.2rem;
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
