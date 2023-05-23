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
    <div className="register" >
      <div className="header">REGISTER</div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <div className="input-groups">
            <label>
                Email:
                <input 
                  type="text"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                      />
              </label>  
          </div>
          <div className="input-groups">
            <label>
              Password:
              <input 
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                    />
            </label>
          </div>
          <div className="input-button">
           <input type="submit"></input>
          </div>
          
        </form>
      </div>
      
    </div>
  )
}

export default Register;