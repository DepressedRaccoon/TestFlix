import React, { useState } from "react";
import "./Login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFethcing, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    Login({ email, password }, dispatch); 
};

return (
  <div className="login">
    <form className="loginForm">
      <input
        type="text"
        placeholder="email"
        className="loginInput"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="loginInput"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginButton" onClick={handleLogin} disabled={isFethcing}>
        Login
      </button>
    </form>
  </div>
);
}