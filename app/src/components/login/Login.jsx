import React, { useState } from "react";
import "./Login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { login } from '../../context/apiCalls'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
        <h1>Sign In</h1>
        <div className='input-groups'>
        <form>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <div className="signup-text">
            <span>
              New to Rickflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </div>
        </form>    
      </div>
      </div>
  );
}