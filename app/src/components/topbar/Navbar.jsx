// import Search from '@mui/icons-material/Search';
import "./Navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
          <img src="/images/cropped rickflix logo.png" alt="Rickflix logo on navbar" className="navbar-logo" />

            <div className="navbar-links">
              <span className="navbar-neon">
                <Link to="/">Homepage</Link>
              </span>
              <span className="navbar-neon">
                <Link to="/series">Series</Link>
              </span>
              <span className="navbar-neon">
                <Link to="/movies">Movies</Link>
              </span>
              <span className="navbar-neon">
                <Link to="/ricktastic">Ricktastic</Link>
              </span>
              <span className="navbar-neon">
                <Link to="/my-ricklist">My Ricklist</Link>
              </span>
            </div>
         

     
          {/* <Search Icon/> */}
          {/* <span>KID</span> */}
        </div>
    </div>
  )
}

export default Navbar