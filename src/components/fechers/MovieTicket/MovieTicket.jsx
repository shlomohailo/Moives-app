import "./MovieTicket.css";

function MovieTicket({ movie }) {
  const { title, year, cast, genres } = movie
  return (
    <div className="movie-ticket">
      <h1>MovieTicket</h1>
      <h1> firstname: {cast[0]}</h1>
      <h1> lastname: {cast[1]}</h1>
      <h1> title: {title}</h1>
      <h1> year: {year}</h1>
      <h1> genres: {genres}</h1>

    </div>
  );
};

export default MovieTicket;
