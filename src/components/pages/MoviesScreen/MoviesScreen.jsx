import "./MoviesScreen.css";
import{useContext} from "react"
import { moviesContext } from "../../../context/Movies-Context/Movies-Context";
import MovieTicket from "../../fechers/MovieTicket/MovieTicket";
function MoviesScreen() {

  const {movies, setMovies} = useContext(moviesContext)
  return (
    <div className="movies-screen">
      <h1>Movies Screen</h1>
      {movies?.map((movieItem)=><MovieTicket movie={movieItem}/>)}
    </div>
  );
};

export default MoviesScreen;
