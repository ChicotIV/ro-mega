import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

import ModalWindow from "./ModalWindow";

const PhoneNavDiv = styled.div`
  padding: 3.2rem;
  /* margin-bottom: 3.2rem; */
`;

function PhoneNav() {
  const [showModal, setShowModal] = useState(false);

  return (
    <PhoneNavDiv>
      {!showModal && (
        <AiOutlineMenu
          size="2.5rem"
          // style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModal(!showModal);
          }}
        />
      )}

      {showModal && (
        <ModalWindow showModal={showModal} setShowModal={setShowModal} />
      )}
    </PhoneNavDiv>
  );
}

export default PhoneNav;
