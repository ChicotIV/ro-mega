import styled from "styled-components";
import Footer from "./Footer";

const StyledViziuneaNoastra = styled.div`
  /* min-height: 100vh; */
  padding: 6.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Header = styled.h1``;

const SmallerHeader = styled.h3``;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

const ListDiv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
`;

function ViziuneaNoastra() {
  return (
    <>
      <StyledViziuneaNoastra>
        <Header>Viziunea noastră – Ce susținem</Header>
        <SmallerHeader>“NOI PUNEM TEHNOLOGIA ÎN MÂINILE TALE!”</SmallerHeader>
        <Paragraph>
          Scopul nostru principal este să asigurăm accesibilitatea tehnologiei
          celor care au nevoie de ea. În acest scop ne folosim competența și ne
          asigurăm că găsim întotdeauna cele mai bune soluții pentru nevoile de
          afaceri ale clienților noștri.
        </Paragraph>
        <Header>
          Valorile noastre – Ce ne conduce și ne definește conduita profesională
        </Header>
        <ListDiv>
          <ListItem>
            <strong>PROFESIONALISM</strong> - Specialiștii noștri, prin
            cunoașterea aprofundată a domeniului de activitate, prin atitudine
            și dedicare, oferă cele mai bune soluții, potrivite nevoilor
            beneficiarilor.
          </ListItem>
          <ListItem>
            <strong>COMPETENȚĂ</strong> - Dobândită din cunoștințele de
            specialitate, pasiunea pentru inginerie, cercetarea constantă,
            cunoașterea pieței din România și a pieței internaționale de către
            specialiștii noștri.
          </ListItem>
          <ListItem>
            <strong>ONESTITATE</strong> - Cea mai bună recomandare a noastră
            este portofoliul parteneri-clienți. Suntem mândri de lunga durată a
            parteneriatelor încheiate cu nume importante din acest domeniu.
          </ListItem>
          <ListItem>
            <strong>DINAMISM</strong> – Înțelegem natura industriei de azi.
            Deoarece tehnologia se dezvoltă într-un ritm foarte alert, suntem
            întotdeauna pregătiți să ne reevaluăm și să ne îmbunătățim
            cunoștințele și abilitățile.
          </ListItem>
        </ListDiv>
      </StyledViziuneaNoastra>
      <Footer />
    </>
  );
}

export default ViziuneaNoastra;
