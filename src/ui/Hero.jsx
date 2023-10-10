import { styled } from "styled-components";

import Slider from "./Slider";

const HeroContainer = styled.div`
  padding: 1.2rem 2.4rem;
  margin-bottom: 2.2rem;
  height: 90vh;
  display: flex;
  align-self: center;
`;

function Hero() {
  return (
    <HeroContainer>
      <Slider />
    </HeroContainer>
  );
}

export default Hero;
