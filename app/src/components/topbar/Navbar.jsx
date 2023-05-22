// import Search from '@mui/icons-material/Search';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
          <img src="/images/cropped rickflix logo.png" alt="Rickflix logo on navbar" className="navbar-logo" />

            <div class="navbar-links">
              <li>Homepage</li>
              <li>Series</li>
              <li>Movies</li>
              <li>Ricktastic</li>
              <li>My Ricklist</li>
            </div>
         

     
          {/* <Search Icon/> */}
          {/* <span>KID</span> */}
        </div>
    </div>
  )
}

export default Navbar