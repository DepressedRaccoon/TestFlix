import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from "./home/Home"
import Login from './components/login/Login';
import Navbar from './components/topbar/Navbar';
import Register from './components/register/Register';
import "./app.scss";

import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
       <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          {!user && <Route path="/register" element={<Register />} />}
          {!user && <Route path="/login" element={<Login />} />}
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};


export default App;