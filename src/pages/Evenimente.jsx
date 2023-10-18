import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from "./Eveniment.module.css";

import { useEvenimente } from "../hooks/useEvenimente";
import { animated, useSpring } from "react-spring";
import Footer from "../ui/Footer";

const StyledEvenimenteDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.4rem;
  margin: 0 auto;
  gap: 6rem;

  overflow: hidden;
`;

const Eveniment = styled.div``;

const Img = styled.img`
  margin-bottom: 3.2rem;
  max-width: 100%;
  @media (max-width: 428px) {
    max-width: 120%;
  }
  @media (max-width: 380px) {
    max-width: 140%;
  }
`;

const Header = styled.h1`
  font-size: 1.9rem;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1.6rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
`;

function Evenimente() {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });
  const {  evenimente } = useEvenimente();

  return (
    <>
      <StyledEvenimenteDiv>
        {evenimente &&
          evenimente.map((eveniment) => (
            <animated.div style={{ ...springs }}>
              <NavLink
                to={`/${eveniment.link}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Eveniment key={eveniment.id} className={styles.eveniment}>
                  <Img src={eveniment.photo} />
                  <Header>{eveniment.title}</Header>
                  <Subtitle>{eveniment.subtitle}</Subtitle>
                </Eveniment>
              </NavLink>
            </animated.div>
          ))}
      </StyledEvenimenteDiv>
      <Footer />
    </>
  );
}

export default Evenimente;
