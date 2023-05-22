import React, { useState } from 'react';

import "./Register.scss";


const Register = () => {
  const [inputs, setInputs] = useState({});
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <div className="register">
      <div className="header">REGISTER</div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input 
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
               />
        </label>
        <label>
          Password:
          <input 
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
               />
        </label>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Register;