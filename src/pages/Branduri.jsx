import { useEffect } from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../ui/Footer";

const data = [
  {
    title: "Masini Unelte",
    image: "./images/DN-solutions-Logo-200x31.png",
    link: "dn-solutions",
  },

  {
    title: "Aparate de masura si control",
    image: "./images/mahr-1024-200x200.png",
    link: "mahr",
  },
  {
    title: "Aparate de masurare 3D",
    image: "./images/faro-1024-200x200.png",
    link: "faro",
  },
  {
    title: "Echipamente de masurare 3D",
    image: "./images/wenzel-1024-200x200.png",
    link: "wenzel",
  },
  {
    title: "Sisteme de masurat",
    image: "./images/logo-ogp-200x200.jpeg",
    link: "ogp",
  },

  { title: "Software", image: "./images/Polyworks.jpg", link: "polyworks" },

  {
    title: "Accesorii Masini Unelte",
    image: "./images/renishaw-1024-200x200.png",
    link: "renishaw",
  },

  {
    title: "Sisteme de prindere pentru masini de masurat in coordonate",
    image: "./images/matrix-1024-200x200.png",
    link: "matrix",
  },

  {
    title: "Aparate de masura si control",
    image: "./images/ultraprazision-1024-200x200.png",
    link: "ultraprazision",
  },

  {
    title: "Sisteme de fixare modulara pentru tehnoplogia de masurare",
    image: "./images/dk-FIXIERSYSTEME-Logo-blauer-Kreis-200x200.png",
    link: "dk",
  },
];

const StyledContainer = styled.div`
  padding: 6.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  max-width: 60vw;
  margin: auto;
`;

const StyledH1 = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

const StyledSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const StyledBrandsContainer = styled.div`
  margin: 6.4rem 0 6.4rem 0;
  display: grid;

  grid-template-columns: repeat(5, min-content);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 2034px) {
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(3, 1fr);
    gap: 2.5rem;
  }
  @media (max-width: 1290px) {
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: repeat(5, 1fr);
    gap: 2.5rem;
  }
  @media (max-width: 654px) {
    grid-template-columns: repeat(1, min-content);
    grid-template-rows: repeat(10, 1fr);
    gap: 2.5rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img``;

const StyledH2 = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 742px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 20) return;
      setCount(count + 1);
    }, 100);
    return () => clearTimeout(timer);
  }, [count]);

  return <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>{count}</div>;
}

function Branduri() {
  return (
    <>
      <StyledContainer>
        <Counter />
        <StyledH1>ANI DE EXPERIENȚĂ PE PIAȚA DIN ROMÂNIA</StyledH1>
        <StyledSubheading>
          Ro-Mega Trade activează de 20 ani pe piața din Romania reprezentând cu
          succes firme de prestigiu în domeniul producției de mașini-unelte și
          al echipamentelor de măsură și control: Doosan Machine Tools Coreea de
          Sud, Mahr Germania, Wenzel Germania, Faro SUA, Renishaw Marea
          Britanie, UltraPrazision Germania.
        </StyledSubheading>
        <StyledBrandsContainer>
          {data.map((item) => (
            <BrandContainer>
              <NavLink
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledImg src={item.image} alt={item.img} />
                <StyledH2>{item.title}</StyledH2>
              </NavLink>
            </BrandContainer>
          ))}
        </StyledBrandsContainer>
      </StyledContainer>
      <Footer />
    </>
  );
}

export default Branduri;
