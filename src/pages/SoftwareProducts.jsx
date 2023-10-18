import { styled } from "styled-components";
import BuletinInformativ from "../ui/BuletinInformativ";
import SoftwareProduct from "../ui/SoftwareProduct";

import { useSoftware } from "../hooks/useSoftware";
import { useEffect } from "react";

const SoftwareProductsDiv = styled.div`
  display: flex;
  padding: 6.4rem;
  gap: 2.4rem;
  max-width: 100vw;

  @media (max-width: 1460px) {
    padding: 3.2rem;
  }
  @media (max-width: 1408px) {
    padding: 0;
    padding-top: 3.2rem;
  }
  @media (max-width: 796px) {
    flex-direction: column;
  }
`;

const SoftwareProductsContainer = styled.div`
  display: grid;

  gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 1824px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1384px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function SoftwareProducts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { software } = useSoftware();

  return (
    <SoftwareProductsDiv>
      <BuletinInformativ />
      <SoftwareProductsContainer>
        {software?.map((item) => (
          <SoftwareProduct software={software[item.id - 1]} key={item.id} />
        ))}
      </SoftwareProductsContainer>
    </SoftwareProductsDiv>
  );
}

export default SoftwareProducts;
