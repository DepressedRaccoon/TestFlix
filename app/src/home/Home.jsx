import List from "../../../api/models/List"
import Navbar from "../components/topbar/Navbar"
import "./home.scss"
import Featured from "../components/featured/Featured"
import List from "../components/list/List"

const home = ({type}) => {
  return (
    <div className="home">
        <Navbar/> 
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default home

