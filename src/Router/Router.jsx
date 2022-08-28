import { Home, About, PageNotFound, MoviesScreen, MovieDetailsScreen } from '../components/index';
import { Routes, Route } from 'react-router-dom';
import "./Router.css";
import MoviesProvider from '../context/Movies-Context/Movies-Context';

function Router() {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='MoviesScreen' element={<MoviesProvider><MoviesScreen /></MoviesProvider>} />
      <Route path='MovieDetailsScreen' element={<MoviesProvider><MovieDetailsScreen /></MoviesProvider>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
