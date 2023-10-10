import { styled } from "styled-components";
import GaleryItem from "./GaleryItem";

const GaleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 60vh;
  overflow: hidden;

  @media (max-width: 1076px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
  }

  @media (max-width: 828px) {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
  }
`;

function Galery() {
  return (
    <GaleryContainer>
      <GaleryItem
        url="url(./images/DNSolutions.jpg)"
        heading="DN Solutions"
        subheading="Mașini Unelte CNC"
        to="/branduri/dn-solutions"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/FaroArm.png)"
        heading="Faro"
        subheading="Măsurare & Inspecție 3D portabilă"
        to="/branduri/faro"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/Mahr.png)"
        heading="Mahr"
        subheading="Aparate de măsură și control ; Sisteme de măsurare"
        to="/branduri/mahr"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/OGP.png)"
        heading="OGP"
        subheading="Mașini optice "
        to="/branduri/ogp"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/PolyWorks.png)"
        heading="PolyWorks"
        subheading="Soluții Software"
        to="/branduri/polyworks"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/renishaw.jpg)"
        heading="Renishaw"
        subheading="Accesorii pentru mașini-unelte și echipamente 3D"
        to="/branduri/renishaw"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/Matrix.jpg)"
        heading="Matrix"
        subheading="Sisteme de prindere piesă"
        to="/branduri/matrix"
      ></GaleryItem>
      <GaleryItem
        url="url(./images/Wenzel.png)"
        heading="Wenzel"
        subheading="Mașini de măsurare 3D"
        to="/branduri/wenzel"
      ></GaleryItem>
    </GaleryContainer>
  );
}

export default Galery;
