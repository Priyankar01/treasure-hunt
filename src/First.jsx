import { useNavigate } from "react-router-dom";

export default function First() {
  const navigate = useNavigate();
  const go = () => {
    navigate("/location/1");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={go}>Navigate</button>
    </div>
  );
}
