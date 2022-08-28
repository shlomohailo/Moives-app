import "./Movies-Context.css";
import { createContext, useEffect, useState } from 'react';
import {getMovies} from '../../services/movies.services'
export const moviesContext = createContext();


function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies()
      .then(result => setMovies(result))
  })
  return (

    <moviesContext.Provider value={{ movies, setMovies }} >
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
