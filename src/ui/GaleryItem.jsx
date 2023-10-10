import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import styles from "./GaleryItem.module.css";

const Heading = styled.h1`
  font-size: 1.2rem;
  color: var(--background-color-white);
  text-transform: uppercase;
  font-weight: 700;
`;

const Subheading = styled.h2`
  font-size: 1.1rem;
  color: var(--background-color-white);
  text-align: center;
`;

const Button = styled(NavLink)`
  background-color: #fff;
  color: #777;

  &::after {
    background-color: #fff;
  }

  &:link,
  &:visited {
    text-decoration: none;
    padding: 1.2rem 2.4rem;
    background-color: var(--text-color-dark);
    border-radius: 11px;
    color: var(--background-color-white);
    font-weight: 500;
    position: relative;
    transition: all 0.3s;
    @media (max-width: 352px) {
      padding: 0.4rem;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &:active:visited {
    color: var(--text-color-dark);
    background: var(--background-color-white);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 11px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;

function GaleryItem({ url, heading, subheading, to }) {
  return (
    <div
      className={styles.x}
      style={{
        backgroundImage: `linear-gradient(var(--text-color-dark-translucent),var(--text-color-dark-translucent)),${url}`,
        height: "auto",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s",
      }}
    >
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <Button to={to}>Află mai multe</Button>
    </div>
  );
}

export default GaleryItem;
