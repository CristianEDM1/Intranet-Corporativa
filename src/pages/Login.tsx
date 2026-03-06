import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import type{ User } from "../types/auth";

const USERS: Record<string, { password: string; user: User }> = {
  admin: {
    password: "1234",
    user: {
      id: 1,
      name: "Administrador",
      role: "admin"
    }
  },

  ti: {
    password: "1234",
    user: {
      id: 2,
      name: "Usuario TI",
      role: "ti"
    }
  },

  rh: {
    password: "1234",
    user: {
      id: 3,
      name: "Capital Humano",
      role: "capital_humano"
    }
  }
};

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    const account = USERS[username];

    if (!account || account.password !== password) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    login(account.user);
    navigate("/app");
  };

  return (
    <div style={container}>
      <div style={card}>

        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleLogin} style={form}>

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

          <button type="submit" style={btn}>
            Entrar
          </button>

        </form>

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
  background: "#f3f4f6"
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "10px",
  width: "320px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center" as const
};

const form = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  marginTop: "20px"
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const btn = {
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

/*
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

}; */



/*
  const handleLogin = () => {
    login({
      id: 1,
      name: "Cristian",
      role: "admin"
    });

    navigate("/app");
  };*/
  
/*
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
}; */