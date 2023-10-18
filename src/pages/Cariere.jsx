import { useState } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";
import { createCariereForm } from "../services/apiCariere";
import Footer from "../ui/Footer";
import supabase from "../services/supabase";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6.4rem;
  margin: 0 auto;
  width: 70%;
`;

const StyledHeader = styled.h1`
  margin-bottom: 1.3rem;
  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.3rem;
`;

const StyledForm = styled.form`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const StyledInputContainer = styled.div``;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInpuLabel = styled.label`
  font-size: 1.2rem;
`;

const StyledInput = styled.input`
  padding: 1.2rem 2rem;
  width: 60vw;
  border-radius: 11px;
  border: 1px solid var(--text-color-dark);
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  width: min-content;
  font-size: 1.1rem;
  color: var(--background-color-white);
  background-color: var(--text-color-dark);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--second-color-dark);
  }
`;

function Cariere() {
  const [radioChecked, setRadioChecked] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [job, setJob] = useState("");

  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  // const [cv, setCv] = useState(null);
  const [mesaj, setMesaj] = useState("");

  async function uploadCv(e) {
    let file = e.target.files[0];

    const { data } = await supabase.storage
      .from("uploads")
      .upload(`${nume} CV`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!radioChecked) return;
    if (
      nume === "" ||
      email === "" ||
      telefon === "" ||
      mesaj === "" ||
      job === ""
    )
      return;

    const newCreateCariereForm = {
      id: Math.floor(Math.random() * 100000),
      nume: nume,
      email: email,
      telefon: telefon,
      job: job,
      // cv: cv,
      mesaj: mesaj,
    };
    createCariereForm(newCreateCariereForm);
    setNume("");
    setEmail("");
    setTelefon("");
    setMesaj("");
    setIsFormSubmitted(true);
  }
  const options = [
    { value: "Marketing", label: "Markgeting" },
    { value: "Contabilitate", label: "Contabilitate" },
    { value: "Service masini-unelte", label: "Service masini-unelte" },
    {
      value: "Service masini de masurat si coordonate",
      label: "Service masini de masurat si coordonate",
    },
    {
      value: "Vanzari si service aparate de masura si control",
      label: "Vanzari si service aparate de masura si control",
    },
    {
      value: "Gestionar de marfa depozit",
      label: "Gestionar de marfa depozit",
    },
    { value: "Altele", label: "Altele" },
  ];

  return (
    <>
      {!isFormSubmitted ? (
        <StyledDiv>
          <StyledHeader>Alătură-te echipei Ro-Mega Trade!</StyledHeader>
          <Subheading>
            Aplică pentru un post în compania noastră, completează formularul:
          </Subheading>

          <StyledInputContainer>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputDiv>
                <StyledInpuLabel>Nume*</StyledInpuLabel>
                <StyledInput
                  type="text"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <StyledInpuLabel>E-mail*</StyledInpuLabel>
                <StyledInput
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <StyledInpuLabel>Telefon*</StyledInpuLabel>
                <StyledInput
                  type="text"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <StyledInpuLabel>Tip job</StyledInpuLabel>
                <Select
                  options={options}
                  onChange={(value) => {
                    setJob(value.value);
                  }}
                />
              </StyledInputDiv>
              <StyledInputDiv>
                <StyledInpuLabel>Mesaj</StyledInpuLabel>
                <StyledInput
                  type="text"
                  value={mesaj}
                  onChange={(e) => setMesaj(e.target.value)}
                  style={{ height: "40vh" }}
                />
              </StyledInputDiv>
              <input type="file" onChange={(e) => uploadCv(e)} />
            </StyledForm>
          </StyledInputContainer>
          <p style={{ padding: "2.5rem" }}>
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
            și sunt de acord cu procesarea datelor personale.
          </p>
          <div style={{ paddingLeft: "2.5rem", marginBottom: "6.4rem" }}>
            <Button onClick={handleSubmit} disabled={!radioChecked}>
              Trimite
            </Button>
          </div>
        </StyledDiv>
      ) : (
        <p style={{ padding: "6.4rem", fontSize: "1.5rem", fontWeight: "600" }}>
          Informatiile au fost trimise!
        </p>
      )}
      <Footer />
    </>
  );
}

export default Cariere;
