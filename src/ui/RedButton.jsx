import { useNavigate } from "react-router-dom";

function RedButton({ nr }) {
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "70%",
    left: "30%",
    transform: "translate(0,-50%)",
    padding: "0.8rem 1.6rem",
    fontSize: "1rem",
    color: "var(--background-color-white)",
    backgroundColor: "var(--second-color-dark)",
    border: "none",
    cursor: "pointer",
    zIndex: 1,
  };

  const style2 = {
    position: "absolute",
    top: "70%",
    left: "40%",
    transform: "translate(0,-50%)",
    padding: "0.8rem 1.6rem",
    fontSize: "1rem",
    color: "var(--background-color-white)",
    backgroundColor: "var(--second-color-dark)",
    border: "none",
    cursor: "pointer",
    zIndex: 1,
  };

  if (nr === 2)
    return (
      <button style={style2} onClick={() => navigate("/promotii")}>
        Vezi promotiile
      </button>
    );

  if (nr === 0)
    return (
      <button
        style={style}
        onClick={() => navigate("/despre-noi/viziunea-noastra")}
      >
        Viziunea si valorile noastre
      </button>
    );

  return (
    <button
      style={style}
      onClick={() => navigate("despre-noi/a-word-from-management")}
    >
      Un cuvant din partea noastra
    </button>
  );
}

export default RedButton;
