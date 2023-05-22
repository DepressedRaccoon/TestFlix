import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from "./home/Home"
import Login from './components/login/Login';
import Navbar from './components/topbar/Navbar';
import Register from './components/register/Register';
import "./app.scss"

const App = () => {
  const user = true; // useContext(AuthContext);
  return (
    <BrowserRouter>
      {/* {user && <Navbar />} */}
      <Routes>
        {/* {!user && <Route path="/register" element={<Register />} />}
        {!user && <Route path="/login" element={<Login />} />}
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )} */}
         <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;