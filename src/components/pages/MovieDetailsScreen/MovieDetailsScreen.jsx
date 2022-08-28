import "./MovieDetailsScreen.css";
import MovieTable from '../../fechers/MovieTable/MovieTable';
import{useContext} from "react";
import { moviesContext } from "../../../context/Movies-Context/Movies-Context";


function MovieDetailsScreen() {
  const {movies, setMovies} = useContext(moviesContext)

  return (
    <div className="movie-details-screen">
      <h1>Movie Details Screen</h1>
      {movies?.map((movieItem)=><MovieTable movie={movieItem}/>)}

    </div>
  );
};

export default MovieDetailsScreen;
