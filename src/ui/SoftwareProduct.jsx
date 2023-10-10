import { styled } from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e9eb;
  gap: 1rem;
`;

const StyledBackgroundImage = styled.img`
  height: 15rem;
  width: 15rem;
`;

const StyledTitle = styled.h2`
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  padding: 0.7rem 4rem 0.7rem 4rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s;
  background-color: var(--text-color-dark);
  color: var(--background-color-white);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--second-color-dark);
  }
`;

function SoftwareProduct({ software }) {
  const { id, createdAt, name, description, images } = software;
  const imageArray = images.split(",");

  return (
    <StyledContainer>
      <NavLink to={`/produse/software/${name.toString().replaceAll(" ", "-")}`}>
        <StyledBackgroundImage src={imageArray[0]} />
      </NavLink>

      <p>Software</p>
      <NavLink
        to={`/produse/software/${name.toString().replaceAll(" ", "-")}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <StyledTitle>{name}</StyledTitle>
      </NavLink>
      <NavLink to={`/produse/software/${name.toString().replaceAll(" ", "-")}`}>
        <StyledButton>Detalii</StyledButton>
      </NavLink>
    </StyledContainer>
  );
}

export default SoftwareProduct;
