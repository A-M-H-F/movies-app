/* eslint-disable */
import { Link } from 'react-router-dom';
// Get All Movies Data and Build a movie card for each one / add a unique link for each movie to redirect view movie details page
function MovieYearCard({ moreMovies, sortMoviesByYear }) {
  return (
    sortMoviesByYear.slice(0, moreMovies).map((movie) => (

      <div key={movie.id} className="movie">
        <Link to={`/movies/${movie.id}}`} style={{ textDecoration: 'none' }}>
          <img src={movie.images['Poster Art'].url} alt="" />
          <div className="movie-info">
            <span>{movie.releaseYear}</span>
            <span>{movie.programType}</span>
          </div>
          <div className="overview">
            <h5>{movie.title}</h5>
          </div>
        </Link>
      </div>
    ))
  );
}
export default MovieYearCard;
