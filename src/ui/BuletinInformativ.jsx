import { useState } from "react";

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { createNewsletterEmail } from "../services/apiNewsletterEmail";
import { animated, useSpring } from "react-spring";

const StyledDivAfterSubscribe = styled.div`
  color: var(--background-color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--text-color-dark);
  width: 15rem;
  height: 15rem;
  border-radius: 0.5rem;

  margin-bottom: 0;
`;

const StyledNewsletterContainer = styled.div`
  color: var(--background-color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: flex-start;
  justify-self: center;
  background-color: var(--text-color-dark);
  width: 15rem;
  border-radius: 0.5rem;

  margin-bottom: 0;

  @media (max-width: 1044px) {
    margin: 0 auto;
    grid-row: 2 / -1;
  }
`;

const StyledHeader = styled.h1`
  font-size: 1.2rem;
  padding: 1.2rem;
`;

const StyledHeading = styled.h2`
  font-size: 1rem;
  padding: 1.2rem;
`;

const Button = styled.button`
  color: var(--background-color-white);
  background-color: var(--second-color-dark);
  align-self: center;
  justify-self: center;
  margin: 1.2rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  font-size: 1rem;
  border: none;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--text-color-dark);
  }
  &:hover,
  &:active {
    color: var(--background-color-white);
    background-color: #961e1e;
  }
`;

function BuletinInformativ() {
  const [email, setEmail] = useState("");
  const [emailIsSubbmited, setEmailIsSubbmited] = useState(false);

  const [masiniUnelte, setMasiniUnelte] = useState(false);
  const [sistemeMasura, setSistemeMasura] = useState(false);

  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "") return;
    if (masiniUnelte === false && sistemeMasura === false) return;

    const newEmail = {
      id: Math.floor(Math.random() * 100000),

      email: email,
      masini_unelte: masiniUnelte,
      sisteme_de_masura_si_control: sistemeMasura,
    };
    createNewsletterEmail(newEmail);
    setEmailIsSubbmited(true);
    setEmail("");
  }

  return (
    <animated.div style={{ ...springs }}>
      {emailIsSubbmited ? (
        <StyledDivAfterSubscribe>
          <h3 style={{ fontSize: "1.2rem", padding: "1.2rem" }}>
            Vă mulțumim!
          </h3>
          <p style={{ fontSize: "0.9rem", padding: "1.2rem" }}>
            V-am trimis un e-mail la adresa cu care v-ați abonat. Pentru a
            finaliza procesul de abonare, este necesar să faceți clik pe butonul
            de confirmare din e-mail
          </p>
        </StyledDivAfterSubscribe>
      ) : (
        <StyledNewsletterContainer>
          <StyledHeader>Buletin informativ</StyledHeader>
          <StyledHeading>
            Activati abonamentul gratuit pentru a obtine acces la informatii
            oferite in exclusivitate abonatilor.
          </StyledHeading>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                margin: "1.2rem",
                alignSelf: "center",
                justifySelf: "center",
              }}
            ></input>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                padding: "1.2rem",
                lineHeight: "1.5",
              }}
            >
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={masiniUnelte}
                  onClick={() => setMasiniUnelte(!masiniUnelte)}
                />
                Masini unelte
              </label>
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={sistemeMasura}
                  onClick={() => setSistemeMasura(!sistemeMasura)}
                />
                Sisteme de masura si control
              </label>
            </div>
            <p style={{ fontSize: "0.8rem", padding: "1.2rem" }}>
              Va puteti dezabona oricand.Pentru mai multe detalii,verificati{" "}
              <span style={{ fontSize: "0.8rem" }}>
                <NavLink
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--background-color-white)",
                  }}
                >
                  Politica de confidentialitate
                </NavLink>
              </span>
              .
            </p>

            <Button style={{ padding: "0.5rem" }}>Vreau sa ma abonez</Button>
          </form>
        </StyledNewsletterContainer>
      )}
    </animated.div>
  );
}

export default BuletinInformativ;
