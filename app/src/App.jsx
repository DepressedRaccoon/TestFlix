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
      {user && <Navbar />}
      <Routes>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;