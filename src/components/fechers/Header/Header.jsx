import "./Header.css";
import { Link } from 'react-router-dom';

export const pages = ["About",
  "MoviesScreen","MovieDetailsScreen"]
function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <Link to="/"><button>Home</button></Link>
      {pages.map(page => <Link to={page}><button>{page}</button></Link>)}
      
    </div>
  );
};

export default Header;
