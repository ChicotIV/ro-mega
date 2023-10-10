import { useNavigate } from "react-router-dom";

function BlueButton({ children, nr }) {
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "70%",
    right: "30%",
    transform: "translate(0,-50%)",
    padding: "0.8rem 1.6rem",
    fontSize: "1rem",
    color: "var(--background-color-white)",
    backgroundColor: "var(--text-color-dark)",
    border: "none",
    cursor: "pointer",
    zIndex: 1,
  };
  if (nr === 2) return null;

  return (
    <button style={style} onClick={() => navigate("/despre-noi")}>
      {children}
    </button>
  );
}

export default BlueButton;
