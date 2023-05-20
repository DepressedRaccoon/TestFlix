// import Search from '@mui/icons-material/Search';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div classname="container">
        <div className="left"></div>
          <img 
          src="<image here>" 
          alt="Rickflix logo on navbar" 
          />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Ricktastic</span>
          <span>My Ricklist</span>
          
        <div className="right"></div>
          {/* <Search Icon/> */}
          <span>KID</span>
          
        </div>
    </div>
  )
}

export default Navbar