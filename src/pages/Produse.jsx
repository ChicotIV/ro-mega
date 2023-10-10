import { useQuery } from "@tanstack/react-query";
import BuletinInformativ from "../ui/BuletinInformativ";
import { getSoftware } from "../services/apiSoftware";
import Spinner from "../ui/Spinner";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Footer from "../ui/Footer";

const StyledProdusePage = styled.div`
  display: flex;
  padding: 6.4rem;
  gap: 6.4rem;
  @media (max-width: 1044px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2, 1fr;
  }
`;

const StyledProductCategoryDiv = styled.div`
  display: grid;
  gap: 4.4rem;

  @media (max-width: 1044px) {
    margin: 0 auto;
    grid-row: 1 / 2;
  }
`;
const ProductLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1044px) {
    margin: 0 auto;
    grid-row: 1 / 2;
  }
`;
const ProductLinkImage = styled.img`
  height: 17.5rem;
`;
const ProductLink = styled(NavLink)`
  color: var(--text-color-dark);
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  &:hover,
  &:active {
  }
`;

function Produse() {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });

  const {
    isLoading,
    data: software,
    error,
  } = useQuery({
    queryKey: ["software"],
    queryFn: getSoftware,
  });

  if (error) return;

  if (isLoading) return <Spinner />;

  return (
    <div>
      <StyledProdusePage>
        <BuletinInformativ className="0" />
        <animated.div style={{ ...springs }}>
          <StyledProductCategoryDiv className="1">
            <ProductLinkContainer className="2">
              <NavLink to="/produse/software" className="3">
                <ProductLinkImage src="/images/software-560x560.png"></ProductLinkImage>
              </NavLink>
              <ProductLink to="/produse/software">
                Software ({software.length})
              </ProductLink>
            </ProductLinkContainer>
          </StyledProductCategoryDiv>
        </animated.div>
      </StyledProdusePage>
      <Footer />
    </div>
  );
}

export default Produse;
