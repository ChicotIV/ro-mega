import styled from "styled-components";
import Footer from "./Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 3.2rem;
  padding: 6.4rem;
  font-size: 1.3rem;
`;

const Paragraph = styled.p``;

function AWordFromManagement() {
  return (
    <>
      <StyledDiv>
        <Paragraph>
          După cum știți, ingineria este o știință foarte practică. Folosește
          valorile teoretice ale matematicii, permanent focalizată însă pe
          aspectele practice. Observă și înțelege legile Universului, prin
          fizică și chimie. Apoi găsește căi să controleze realitatea și să lase
          să se întâmple lucruri minunate.
        </Paragraph>
        <Paragraph>
          Aici, la Ro-Mega Trade, credem cu tărie în valoarea tehnologiei și a
          cunoașterii. Credem că puterea stă în cunoaștere. Astfel, transmiterea
          informațiilor și a abilităților este un act de putere. Acesta este
          principiul de bază care ne ghidează în afacerea noastră.
        </Paragraph>
        <Paragraph>
          În aceasta eră, caracterizată de o abundență de informații, este ușor
          să te pierzi. Devine deci vital să fii capabil să alegi factorii cheie
          care-ți vor servi și nu pe cei care vor lucra împotriva ta. Pentru
          aceste motive, noi investim în mod constant în cercetare, în formarea
          și educarea experților noștri. Suntem întotdeauna la curent cu
          ultimele inovații tehnologice în domeniul nostru tehnologic de
          expertiză.
        </Paragraph>
        <Paragraph>
          Procesam cercetările noastre prin analiză, comparație și reevaluarea
          informațiilor. Înțelegem știința din spatele fiecărui produs. În acest
          fel, suntem capabili să ne adresăm cel mai bine nevoilor clienților
          noștri și să propunem cele mai potrivite soluții.
        </Paragraph>
        <Paragraph>
          Ingineria încercă să găsească soluțiile optime la problemele
          cotidiene. Pornind de la asta, scopul nostru este să folosim această
          unealtă supremă, cunoașterea, pentru a înțelege, explora și
          interacționa cu lumea în cel mai eficient și mai responsabil mod. Si
          astfel, Universul devine locul nostru de joacă.
        </Paragraph>
        <Paragraph>
          Promisiunea noastră: Vă oferim puterea cunoașterii, singurul avantaj
          înțelept pe care omenirea l-a avut vreodată.
        </Paragraph>
      </StyledDiv>
      <Footer />
    </>
  );
}

export default AWordFromManagement;
