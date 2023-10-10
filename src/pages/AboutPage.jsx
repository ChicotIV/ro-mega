import Slider from "react-slick";
import { styled } from "styled-components";
import { FaMedal, FaRegThumbsUp, FaCogs, FaUserCog } from "react-icons/fa";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import DropDownMenu from "../ui/DropDownMenu";
import Footer from "../ui/Footer";
import MediaQuery from "react-responsive";

const StyledAboutPage = styled.div`
  padding: 6.4rem;
  max-width: 100vw;
`;

const StyledSliderContainer = styled.div`
  max-width: 65vw;
`;

const StyledSlide = styled.div`
  height: 75vh;
  width: 75vw;
`;

const StyledH1 = styled.h1`
  margin: 6.4rem 0 3.2rem 0;
  text-transform: uppercase;
  color: var(--text-color-dark);
`;

const StyledParagraphText = styled.p`
  font-size: 1.3rem;
`;

const StyledParagraph = styled.div``;

const StyledParagraphHeader = styled.h3`
  margin-bottom: 1.2rem;
`;

const StyledTestimonialsDiv = styled.div`
  margin-top: 6.4rem;
  display: grid;
  gap: 2.4rem;
  grid-template-rows: 1fr min-content 1 fr;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 792px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledTestimonialsDiv2 = styled.div`
  margin-top: 6.4rem;
  display: grid;
  gap: 2.4rem;
  grid-template-rows: 1fr min-content 1 fr;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 792px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;
const TestimonialComponent = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TestimonialHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`;

const TestimonialText = styled.p`
  text-align: center;
  font-size: 1.3rem;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  border-radius: 50%;
  width: fit-content;
  background-color: var(--text-color-dark);
`;

const StyledPerksDiv = styled.div`
  margin: 6.4rem 0 6.4rem 0;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledPerksHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

const StyledPerksText = styled.ul`
  font-size: 1.3rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StyledPerksTextItem = styled.li``;

const StyledManagementDiv = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 1.2rem;
  margin-bottom: 6.4rem;
  @media (max-width: 1064px) {
    flex-direction: column;
  }
`;

const ManagementDivLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 400px;
`;

const ImgContainer = styled.div`
  background-size: cover;
  background-image: url("./images/romega-trade-despre-noi-elif-400x266.png");
  height: 266px;
  width: 400px;
  background-position: center;
`;

const ManagementDivLeftH1 = styled.h3`
  font-size: 1.2rem;
`;

const ManagementDivLeftH2 = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
`;

const ManagementDivLeftParagraph = styled.p`
  margin-top: 1.2rem;
  font-size: 1rem;
  font-style: italic;
  align-self: center;
`;

const ManagementDivRightContainer = styled.div``;

const CertificationsDiv = styled.div`
  margin: 6.4rem 6.4rem 6.4rem 0;
  display: flex;
  flex-direction: column;
`;

const CertificationDivHeader = styled.h1`
  margin-bottom: 2rem;
`;

function AboutPage() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <>
      <StyledAboutPage>
        <MediaQuery minWidth={1144}>
          <StyledSliderContainer>
            <Slider {...settings}>
              <StyledSlide>
                <img
                  src={"./images/galery-slider1.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider2.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider3.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider4.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider5.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider6.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
              <StyledSlide>
                <img
                  src={"./images/galery-slider7.jpg"}
                  alt="xd"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </StyledSlide>
            </Slider>
          </StyledSliderContainer>
        </MediaQuery>
        <StyledH1>Aducem "tehnologia in mainile tale" din 2002</StyledH1>
        <StyledParagraph>
          <StyledParagraphHeader>
            Ro-Mega Trade este parte din brand-ul Mega Group.
          </StyledParagraphHeader>
          <StyledParagraphText>
            Ro-Mega Trade este parte din brand-ul Mega Group. Compania a fost
            fondată în 1987 și și-a început activitatea prin vânzarea de
            echipament de măsurare, control și testare. În anii care au urmat,
            sub denumirea Mega-Group, șapte companii au luat naștere. Una dintre
            ele este Ro-Mega Trade (2002). Ro-Mega Trade a înregistrat o
            dezvoltare constantă. Și-a creat un nume care e legat de loialitate,
            consecvență și calitate. Acest lucru a condus la parteneriate de
            lungă durată cu nume importante din domeniu prelucrării și
            controlului calității. În cei peste 18 ani de activitate, Ro-Mega
            Trade a reușit să-și creeze un fundament solid și să aducă
            tehnologia mai aproape de clienții săi. Parteneriatele de durată și
            încununate de succese sunt cele mai importante dovezi ale
            realizărilor Ro-Mega Trade. De-a lungul anilor, Ro-Mega Trade a
            transformat investițiile în specialiștii săi într-o adevărată
            tradiție, sprijinindu-i să devină mai buni și să servească drept o
            interfață competentă între producătorii și cumpărătorii de
            echipamente industriale. Ro-Mega Trade este un distribuitor de
            mașini-unelte și echipamente de măsură și control de renume mondial.
            Cu alte cuvinte, funcționează ca o interfață între producătorii și
            cumpărătorii din acest domeniu de activitate. Cu o cunoaștere
            absolută a domeniului, producătorilor și produselor putem să
            recomandăm cele mai bune soluții pentru clienții noștri.
          </StyledParagraphText>
        </StyledParagraph>

        <StyledTestimonialsDiv>
          <TestimonialComponent>
            <StyledIconContainer>
              <FaMedal size="4rem" color="var(--background-color-white)" />
            </StyledIconContainer>
            <TestimonialHeader>Competenta</TestimonialHeader>
            <TestimonialText>
              Dobândită din cunoștințele de specialitate, pasiunea pentru
              inginerie, cercetarea constantă, cunoașterea pieței din România și
              a pieței internaționale de către specialiștii noștri.
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent>
            <StyledIconContainer>
              <FaRegThumbsUp
                size="4rem"
                color="var(--background-color-white)"
              />
            </StyledIconContainer>
            <TestimonialHeader>Onestitate</TestimonialHeader>
            <TestimonialText>
              Cea mai bună recomandare a noastră este portofoliul de
              parteneri-clienți. Suntem mândri de lungă durată a parteneriatelor
              încheiate cu nume importante din acest domeniu.
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent>
            <StyledIconContainer>
              <BsGraphUpArrow
                size="4rem"
                color="var(--background-color-white)"
              />
            </StyledIconContainer>
            <TestimonialHeader>Dinamism</TestimonialHeader>
            <TestimonialText>
              Înțelegem natura industriei de azi. Deoarece tehnologia se
              dezvoltă într-un ritm foarte alert, suntem întotdeauna pregătiți
              să ne reevaluăm și să ne îmbunătățim cunoștințele și abilitățile.
            </TestimonialText>
          </TestimonialComponent>
        </StyledTestimonialsDiv>

        <StyledPerksDiv>
          <StyledPerksHeader>Ce oferim?</StyledPerksHeader>
          <StyledPerksText>
            <StyledPerksTextItem>
              Consultanță și soluții tehnologice: Ro-Mega Trade nu vinde doar
              produse. Vindem răspunsuri de inginerie la nevoile clienților
              noștri.
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Produsele noastre variază între: strunguri, centre de prelucrare
              verticale și orizontale, centre de frezat, software, echipamente
              de control și instrumente de metrologie.
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Instalarea mașinilor și a echipamentelor
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Pregătirea personală: Asigurăm că personalul care operează și
              folosește utilaje este gata să exploateze produsul la maxim. De
              asemenea, utilizarea se va face în așa fel încât viața și
              performanța produsului să fie conforme standardelor.
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Serviciu tehnic și soluții flexibile pentru întreținere: susținem
              afacerea clienților noștri cu opțiuni flexibile de garanție,
              întreținerea și repararea echipamentelor.
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Piese de schimb și consumabile
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Soluții de modernizare și upgrade
            </StyledPerksTextItem>
            <StyledPerksTextItem>
              Aducem tehnologia mai aproape: Înțelegem că este crucial pentru
              clienții noștri să vadă instrumentele și mașinile la locul de
              muncă. Organizăm evenimente periodice care oferă potențialilor
              clienți și entuziaștilor tehnologici posibilitatea de a vedea
              demonstrații și mașini de ultimă oră în acțiune.
            </StyledPerksTextItem>
          </StyledPerksText>
        </StyledPerksDiv>

        <StyledManagementDiv>
          <ManagementDivLeftContainer>
            <ImgContainer></ImgContainer>
            <ManagementDivLeftH1>Elif Özkan</ManagementDivLeftH1>
            <ManagementDivLeftH2>
              Director General Ro-Mega Trade
            </ManagementDivLeftH2>
            <ManagementDivLeftParagraph>
              <span style={{ display: "block", textAlign: "center" }}>
                Vă oferim puterea cunoașterii, singurul avantaj înțelept pe care
                omenirea l-a avut vreodată.
              </span>
            </ManagementDivLeftParagraph>
          </ManagementDivLeftContainer>
          <ManagementDivRightContainer>
            După cum știți, ingineria este o știință foarte practică. Folosește
            valorile teoretice ale matematicii, permanent focalizată însă pe
            aspectele practice. Observă și înțelege legile Universului, prin
            fizică și chimie. Apoi găsește căi să controleze realitatea și să
            lase să se întâmple lucruri minunate. Aici, la Ro-Mega Trade, credem
            cu tărie în valoarea tehnologiei și a cunoașterii. Credem că puterea
            stă în cunoaștere. Astfel, transmiterea informațiilor și a
            abilitaților este un act de putere. Acesta este principiul de bază
            care ne ghidează în afacerea noastră. În această eră, caracterizată
            de o abundență de informații, este ușor să te pierzi. Devine deci
            vital să fii capabil să alegi factorii cheie care-ți vor servi și nu
            pe cei care vor lucra împotriva ta. Pentru aceste motiv, noi
            investim în mod constant în cercetare, în formarea și educarea
            experților noștri. Suntem întotdeauna la curent cu ultimele inovații
            tehnologice în domeniul nostru tehnologic de expertiză. Procesăm
            cercetările noastre prin analiza, comparația și reevaluarea
            informațiilor. Înțelegem știința din spatele fiecărui produs. În
            acest fel, suntem capabili să ne adresam cel mai bine nevoilor
            clienților noștri și să propunem cele mai potrivite soluții.
            Ingineria încearcă să găsească soluții optime la problemele
            cotidiene. Pornind de la aceasta, scopul nostru este să folosim
            această unealtă supremă, cunoașterea, pentru a înțelege, explora și
            interacționa cu lumea în cel mai eficient și mai responsabil mod. Și
            astfel, Universul devine locul nostru de joacă.
          </ManagementDivRightContainer>
        </StyledManagementDiv>
        <StyledTestimonialsDiv2>
          <TestimonialComponent>
            <StyledIconContainer>
              <FaCogs size="4rem" color="var(--background-color-white)" />
            </StyledIconContainer>
            <TestimonialHeader>Tehnologie</TestimonialHeader>
            <TestimonialText>
              Este baza activității noastre și pasiunea noastră cea mai mare.
              Vindem echipamente și mașini care rezolvă probleme. Și astfel
              găsim soluții problemelor voastre.
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent>
            <StyledIconContainer>
              <FaArrowsUpDownLeftRight
                size="4rem"
                color="var(--background-color-white)"
              />
            </StyledIconContainer>
            <TestimonialHeader>Versatilitate</TestimonialHeader>
            <TestimonialText style={{ fontSize: "1.2rem" }}>
              Aceasta definește Ro-Mega Trade. Noi vindem mașinării și
              instrumente care sunt proiectate să găsească soluții la diferite
              probleme industriale. În timp ce facem asta, folosim abilitățile
              noastre de a rezolva probleme în beneficiul partenerilor noștri.
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent>
            <StyledIconContainer>
              <FaUserCog size="4rem" color="var(--background-color-white)" />
            </StyledIconContainer>
            <TestimonialHeader>Adaptabilitate</TestimonialHeader>
            <TestimonialText>
              Înțelegem că nevoile clienților noștri sunt foarte diferite, din
              punct de vedere tehnologic, financiar și practic. Înțelegem aceste
              nevoi și întotdeauna găsim o cale să le livrăm cea mai potrivită
              soluție.
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent>
            <StyledIconContainer>
              <IoIosCheckmarkCircle
                size="4rem"
                color="var(--background-color-white)"
              />
            </StyledIconContainer>
            <TestimonialHeader>Fiabilitate</TestimonialHeader>
            <TestimonialText>
              În strânsă legătură cu siguranța, este unul dintre cele mai
              importante scopuri ale noastre să le asigurăm sentimentul de
              siguranță partenerilor noștri atunci când aleg serviciile noastre!
            </TestimonialText>
          </TestimonialComponent>
          <TestimonialComponent></TestimonialComponent>
        </StyledTestimonialsDiv2>
        <DropDownMenu />

        <CertificationsDiv>
          <CertificationDivHeader>Certificari</CertificationDivHeader>
          <a
            href="./images/ISO-14001-2015_Sistem-de-Management-de-Mediu-.pdf"
            style={{
              marginBottom: "1.2rem",
              textDecoration: "none",
              fontSize: "1.3rem",
              fontWeight: "500",
              color: "var(--text-color-dark)",
            }}
          >
            ISO 9001
          </a>
          <a
            href="./images/RO-MEGA-TRADE-9001-CERTIFICAT-RENAR.pdf"
            style={{
              marginBottom: "1.2rem",
              textDecoration: "none",
              fontSize: "1.3rem",
              fontWeight: "500",
              color: "var(--text-color-dark)",
            }}
          >
            ISO 140001
          </a>
        </CertificationsDiv>
      </StyledAboutPage>
      <Footer />
    </>
  );
}

export default AboutPage;
