import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "./Footer.module.css";
import style from "./Hover.module.css";

const StyledFooter = styled.footer`
  padding: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--background-color-white);
  background-color: var(--text-color-dark);
  margin-bottom: 0;
  width: 100%;
`;

const StyledLogoText = styled.div`
  color: var(--background-color-white);
  background-color: var(--text-color-dark);
  padding: 1.2rem;
  font-weight: 200;
  text-align: center;
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <NavLink
          className={styles.footer}
          style={{
            padding: "2.4rem",
            fontFamily: "inherit",
            textDecoration: "none",
            fontWeight: "500",
            color: "var(--background-color-white)",
            textTransform: "uppercase",
          }}
          to="/politica-de-confidentialitate"
        >
          Politica de confidentialitate
        </NavLink>
        <a href="https://www.facebook.com/RoMegaTrade">
          <IconContext.Provider
            value={{
              color: "var(--background-color-white)",
              padding: "2.4rem",
            }}
          >
            <FaFacebook size="2em" className={style.hover} />
          </IconContext.Provider>
        </a>
      </StyledFooter>

      <StyledLogoText>© Ro-Mega Trade SRL</StyledLogoText>
    </>
  );
}

export default Footer;
