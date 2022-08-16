import { Link } from 'react-router-dom';
import imgR from '../assets/img/back-details-1.jpg';

// Get All Movies Data and Build a movie card for each one / add a unique link for each movie to redirect to view movie details page
function MovieCard({
  filteredType, moreMovies, searchTerm, sortMovies, filteredResults, sortMoviesByYear,
}) {
  const urlRegex = /\s/g;
  let changeF;
  if (searchTerm.length >= 3) {
    changeF = filteredResults;
  } else if (sortMovies && sortMovies !== 'all') {
    changeF = sortMoviesByYear;
  } else changeF = filteredType;
  return (
    changeF.slice(0, moreMovies).map((movie) => (
      <div key={movie.id} className="movie">
        <Link to={`/movies/${movie.id}/${movie.title.toLowerCase().replace(urlRegex, '-')}`} style={{ textDecoration: 'none' }}>
          <img src={movie.images['Poster Art'].url} onError={(e) => { e.target.onerror = null; e.target.src = imgR; }} alt="cover" />
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
export default MovieCard;
