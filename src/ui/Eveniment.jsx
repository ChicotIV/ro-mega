import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import Footer from "../ui/Footer";

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
`;

const Img = styled.img`
  max-width: 100vw;
`;

const StyledText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 2;
`;

function Eveniment({ data }) {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });

  return (
    <>
      <StyledDiv>
        <animated.div
          style={{
            ...springs,
            display: "flex",
            flexDirection: "column",
            gap: "3.2rem",
          }}
        >
          <StyledTitle>{data.title}</StyledTitle>
          <Img src={data.photo} />
          <StyledText>{data.text}</StyledText>
        </animated.div>
      </StyledDiv>
      <Footer />
    </>
  );
}

export default Eveniment;
