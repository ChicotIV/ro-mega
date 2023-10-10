import { styled } from "styled-components";
import { useState } from "react";
import { createContactForm } from "../services/apiContactForm";

const StyledContainer = styled.div`
  padding: 3.2rem;

  margin: 0 auto;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:nth-child(7) {
    grid-column: 1/-1;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2.5rem;
  width: 35vw;
  margin: 0 auto;
  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 0.5rem;
  padding: 1rem;
`;
const StyledLabel = styled.label`
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  grid-row: 5/-1;
  grid-column: 1/-1;
  padding: 1.2rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  background-color: var(--text-color-dark);
  color: var(--background-color-white);
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--second-color-dark);
  }
`;
const StyledAfterParagraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [companie, setCompanie] = useState("");
  const [functia, setFunctia] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [interesat, setInteresat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      nume === "" ||
      prenume === "" ||
      companie === "" ||
      functia === "" ||
      email === "" ||
      telefon === "" ||
      interesat === ""
    )
      return;

    const newContactForm = {
      id: Math.floor(Math.random() * 100000),

      nume,
      prenume,
      companie,
      functia,
      email,
      telefon,
      interesat,
    };
    createContactForm(newContactForm);
    setNume("");
    setPrenume("");
    setCompanie("");
    setFunctia("");
    setEmail("");
    setTelefon("");
    setInteresat("");
    setIsFormSubmitted(true);
  }

  return (
    <StyledContainer>
      {!isFormSubmitted ? (
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
            <StyledLabel>Prenume</StyledLabel>
            <StyledInput
              type="text"
              value={prenume}
              onChange={(e) => setPrenume(e.target.value)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledLabel>Companie</StyledLabel>
            <StyledInput
              type="text"
              value={companie}
              onChange={(e) => setCompanie(e.target.value)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledLabel>Functia</StyledLabel>
            <StyledInput
              type="text"
              value={functia}
              onChange={(e) => setFunctia(e.target.value)}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <StyledLabel>E-mail</StyledLabel>
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
            <StyledLabel>Interesat de</StyledLabel>
            <StyledInput
              type="text"
              value={interesat}
              onChange={(e) => setInteresat(e.target.value)}
            />
          </StyledInputDiv>
          <StyledButton>Cere oferta</StyledButton>
        </StyledForm>
      ) : (
        <StyledAfterParagraph>
          Informatiile au fost trimise. Veti fi contactat in scurt timp!
        </StyledAfterParagraph>
      )}
    </StyledContainer>
  );
}

export default ContactForm;
