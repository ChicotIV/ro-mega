import styled from "styled-components";
import { useState } from "react";
import { lastPageContactForm } from "../services/apiLastPageContactForm";
import { NavLink } from "react-router-dom";
import Footer from "../ui/Footer";

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: auto;
  padding: 6.4rem;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  @media (max-width: 1304px) {
    flex-direction: column;
  }
`;

const MediaQuery528px = styled.div`
  @media (max-width: 528px) {
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 484px) {
    max-width: 100vw;
  }
`;

const StyledForm = styled.div`
  padding: 2.5rem;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: max-content;
  /* width: 25rem; */
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  max-width: 90vw;
  padding: 1rem 15rem 0 0;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 468px) {
    width: 90vw;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 70vw; */
  gap: 3.2rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  width: min-content;
  font-size: 1.1rem;
  color: var(--background-color-white);
  background-color: var(--text-color-dark);
  border: none;
  cursor: pointer;
  @media (max-width: 528px) {
    margin: 0 auto;
  }

  &:hover {
    background-color: var(--second-color-dark);
  }
`;

function Contact() {
  const [radioChecked, setRadioChecked] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [mesaj, setMesaj] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (radioChecked !== true) return;
    if (nume === "" || email === "" || telefon === "" || mesaj === "") return;
    const newLastPageContactForm = {
      nume: nume,
      email: email,
      telefon: telefon,
      mesaj: mesaj,
      id: Math.floor(Math.random() * 100000),
    };
    lastPageContactForm(newLastPageContactForm);
    setNume("");
    setEmail("");
    setTelefon("");
    setMesaj("");
    setIsFormSubmitted(true);
  }

  return (
    <>
      <StyledDiv>
        <LeftDiv>
          <h3>Sediu Social</h3>
          <p>
            Bucuresti, sector 3, Bd. Basarabia, Nr. 250, Clădirea Simtex, Parter
          </p>
          <p>
            Cod postal: <span>030352</span>
          </p>

          <p>Punct de lucru</p>
          <p>Hyperion Towers, Bd-ul Pipera, Nr. 1/VI, Voluntari, Ilfov</p>
          <p>
            <span>Cod Postal:</span> <span>077190</span>
          </p>
          <p>
            <span>Telefon:</span> <span>+ 40 (21) 255.25.08</span>
          </p>
          <p>
            <span>Fax: </span> <span>+ 40 (21) 255.25.09</span>
          </p>
          <p>Calea Făgărașului, Nr. 29, Corp B | Brașov</p>
          <p>
            <span>Cod postal: </span> <span>50053</span>
          </p>
          <p>
            <span>Telefon: </span> <span>+40 (36) 800.42.06</span>
          </p>
          <p>
            <span>Email: </span> <span>office@romegatrade.ro</span>
          </p>
          <p>
            <span>Web: </span> <span>www.romegatrade.ro</span>
          </p>
        </LeftDiv>
        <RightDiv>
          <>
            {!isFormSubmitted ? (
              <>
                <StyledForm onSubmit={handleSubmit}>
                  <StyledInputDiv>
                    <StyledLabel>Nume</StyledLabel>
                    <StyledInput
                      type="text"
                      value={nume}
                      onChange={(e) => setNume(e.target.value)}
                    />
                  </StyledInputDiv>
                  <StyledInputDiv>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </StyledInputDiv>
                  <StyledInputDiv>
                    <StyledLabel>Telefon</StyledLabel>
                    <StyledInput
                      type="text"
                      value={telefon}
                      onChange={(e) => setTelefon(e.target.value)}
                    />
                  </StyledInputDiv>
                  <StyledInputDiv>
                    <StyledLabel>Mesaj</StyledLabel>
                    <StyledInput
                      type="text"
                      value={mesaj}
                      onChange={(e) => setMesaj(e.target.value)}
                      style={{ paddingBottom: "5rem" }}
                    />
                  </StyledInputDiv>
                </StyledForm>

                <MediaQuery528px>
                  <input
                    type="checkbox"
                    checked={radioChecked}
                    onClick={() => setRadioChecked(!radioChecked)}
                    style={{
                      color: "var(--text-color-dark)",
                      borderRadius: "10%",
                      border: "10px solid red",
                      marginRight: "1rem",
                    }}
                  />
                  Am citit
                  <NavLink
                    to="/politica-de-confidentialitate"
                    style={{
                      textDecoration: "none",
                      color: "var(--second-color-dark)",
                    }}
                  >
                    {" "}
                    Politica de confidențialitate{" "}
                  </NavLink>
                  și sunt de acord cu procesarea datelor personale.*
                </MediaQuery528px>
                <Button onClick={handleSubmit} disabled={!radioChecked}>
                  Trimite
                </Button>
              </>
            ) : (
              <p
                style={{
                  gap: "3.2rem",
                  textAlign: "center",
                  fontSize: "2.5rem",
                }}
              >
                Datele au fost trimise!
              </p>
            )}
          </>
        </RightDiv>
      </StyledDiv>
      <Footer />
    </>
  );
}

export default Contact;
