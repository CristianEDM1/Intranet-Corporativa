import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const handleLogin = () => {

  if (username === "admin" && password === "1234") {

    login({
      id: 1,
      name: "Cristian",
      role: "admin"
    });

    navigate("/app");

  } else {
    alert("Usuario o contraseña incorrectos");
  }

};
/*
  const handleLogin = () => {
    login({
      id: 1,
      name: "Cristian",
      role: "admin"
    });

    navigate("/app");
  };*/
  return (
    <div style={container}>
      <div style={card}>
        <h2>Iniciar Sesión</h2>

        <input
  placeholder="Usuario"
  style={input}
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

       <input
  placeholder="Contraseña"
  type="password"
  style={input}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
        <button onClick={handleLogin} style={btn}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f1f5f9"
};

const card = {
  background: "white",
  padding: "50px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
  width: "300px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const btn = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "white"
};