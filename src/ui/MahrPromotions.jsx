import styled from "styled-components";
import { HiMiniBanknotes } from "react-icons/hi2";
import Footer from "../ui/Footer";

const data = [
  {
    title: "COMPARATOR MILLIMESS 1003 Mahr",
    discount: 26,
    pret: 270,
    pretPromo: 200,
    technicalData:
      "/images/romega-trade-ceas-comparator-mahr-millimess-1003-date-tehnice-600x320.png",
    img: "/images/romega-trade-ceas-comparator-mahr-millimess-1003.png",
  },

  {
    title: "COMPARATOR SUPRAMESS 1002 Mahr",
    discount: 34,
    pret: 453.6,
    pretPromo: 300,
    technicalData:
      "/images/romega-trade-ceas-comparator-mahr-millimess-1002-date-tehnice-600x320.png",
    img: "/images/romega-trade-ceas-comparator-mahr-millimess-1003.png",
  },
  {
    title: "COMPARATOR MARCATOR 1087 Ri 25 mm",
    discount: 45,
    pret: 696,
    pretPromo: 380,
    technicalData:
      "/images/romega-trade-ceas-comparator-digital-marcator-1087-ri-25-mm-date-tehnice-600x281.png",
    img: "/images/romega-trade-ceas-comparator-digital-marcator-1087-ri-50-mm.png",
  },
  {
    title: "COMPARATOR MARCATOR 1087 Ri 50 mm",
    discount: 47.5,
    pret: 1046,
    pretPromo: 550,
    technicalData:
      "/images/romega-trade-ceas-comparator-digital-marcator-1087-ri-50-mm-date-tehnice-600x281.png",
    img: "/images/romega-trade-ceas-comparator-digital-marcator-1087-ri-50-mm.png",
  },
  {
    title: "COMPARATOR MILLIMESS 1000A Mahr",
    discount: 33,
    pret: 746,
    pretPromo: 500,
    technicalData:
      "/images/romega-trade-ceas-comparator-analog-mahr-millimess-1000-A-date-tehnice-1-600x288.png",
    img: "/images/romega-trade-ceas-comparator-analog-mahr-millimess-1000-A.png",
  },
];

const StyledDiv = styled.div``;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.4rem;
  margin: 0 auto;
`;

const PromotiiDiv = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 2, 1fr;
`;

const Promotie = styled.div`
  display: flex; /* width: 70vw; */
  margin: 0 auto;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 35vw;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledGridItem = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 0 auto;
`;

const LeftGridPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const GridHeader = styled.h1``;

const GridImg = styled.img``;

const RightGridPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const UnderTechnicalDataDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridTechnicalData = styled.img``;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const NormalPriceDiv = styled.div``;

const PromoPretDiv = styled.div``;

const FooterText = styled.div`
  padding: 6.4rem;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1.5rem;
`;

function MahrPromotions() {
  return (
    <>
      <StyledDiv>
        <StyledHeader>
          <img src="/images/mahr.jpg" alt="mahr.jpg" />
          <h1>Promotii Mahr</h1>
        </StyledHeader>
      </StyledDiv>
      <PromotiiDiv>
        <Promotie>
          <LeftBox>
            <h1>MICROMETRU Mahr 40A 0-25mm</h1>
            <img
              src="/images/romega-trade-micrometru-mahr-40-a-0-25-mm-1-600x360.png"
              alt="romega-trade-micrometru-mahr-40-a-0-25-mm-1-600x360.png"
            />
          </LeftBox>
          <RightBox>
            <IconDiv>
              <HiMiniBanknotes color="var(--second-color-dark)" size={"7em"} />
              <p
                style={{
                  color: "var(--second-color-dark)",
                  fontSize: "1.5rem",
                }}
              >
                Discount
              </p>
              <p
                style={{
                  color: "var(--second-color-dark)",
                  fontSize: "2.5rem",
                }}
              >
                42%
              </p>
            </IconDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{ color: "var(--text-color-dark)", fontSize: "1.2rem" }}
              >
                Pret lista
              </p>
              <p
                style={{ color: "var(--text-color-dark)", fontSize: "2.5rem" }}
              >
                69,3€
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "var(--second-color-dark)",
                  fontSize: "1.2rem",
                }}
              >
                Pret promo
              </p>
              <p
                style={{
                  color: "var(--second-color-dark)",
                  fontSize: "2.5rem",
                }}
              >
                40€
              </p>
            </div>
          </RightBox>
        </Promotie>

        {data.map((item) => (
          <StyledGridItem>
            <LeftGridPart>
              <GridHeader>{item.title}</GridHeader>
              <GridImg src={item.img} alt={item.img} />
            </LeftGridPart>
            <RightGridPart>
              <GridTechnicalData
                src={item.technicalData}
                alt={item.technicalData}
              />
              <UnderTechnicalDataDiv>
                <DetailsContainer>
                  <HiMiniBanknotes
                    color="var(--second-color-dark)"
                    size={"7em"}
                  />
                  <p
                    style={{
                      color: "var(--second-color-dark)",
                      fontSize: "1.5rem",
                    }}
                  >
                    Discount
                  </p>
                  <p
                    style={{
                      color: "var(--second-color-dark)",
                      fontSize: "2.5rem",
                    }}
                  >
                    {item.discount}%
                  </p>
                </DetailsContainer>
                <NormalPriceDiv
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                  }}
                >
                  <p
                    style={{
                      color: "var(--text-color-dark)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Pret lista
                  </p>
                  <p
                    style={{
                      color: "var(--text-color-dark)",
                      fontSize: "2.5rem",
                    }}
                  >
                    <s>{item.pret}€</s>
                  </p>
                </NormalPriceDiv>
                <PromoPretDiv
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                  }}
                >
                  <p
                    style={{
                      color: "var(--second-color-dark)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Pret promo
                  </p>
                  <p
                    style={{
                      color: "var(--second-color-dark)",
                      fontSize: "2.5rem",
                    }}
                  >
                    {item.pretPromo}€
                  </p>
                </PromoPretDiv>
              </UnderTechnicalDataDiv>
            </RightGridPart>
          </StyledGridItem>
        ))}
      </PromotiiDiv>

      <FooterText>
        Promoție valabilă în perioada August – Septembrie 2023, în limita
        stocului disponibil. Livrare imediată din stoc. Pentru orice altă
        informație sau solicitare, vă rugăm să ne contactați la
        <span style={{ color: "var(--second-color-dark)" }}>
          {" "}
          office@romegatrade.ro{" "}
        </span>
        sau la telefon{" "}
        <span style={{ color: "var(--second-color-dark)" }}>
          021.255.25.08.
        </span>
      </FooterText>

      <Footer />
    </>
  );
}

export default MahrPromotions;
