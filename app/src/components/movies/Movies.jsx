import "./topbar/Navbar";
import "./Movies.scss";

const Movies = () => {
    return(
        <div className="movies">
            MOVIE PAGE
            <img class='movieImg' src='app\public\images\Adventure To South America.png'></img>
            <img class='movieImg' src='app\public\images\Just Dance Revolution.png'></img>
            <img class='movieImg' src='app\public\images\Talking Frog Convinces Son to Kill Father 2.png'></img>
            <img class='movieImg' src='app\public\images\Western Time Travelers.png'></img>
        </div>
    )
}

export default Movies