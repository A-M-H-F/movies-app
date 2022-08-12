/* eslint-disable */
import { Link } from 'react-router-dom';
// Get All Movies Data and Build a movie card for each one / add a unique link for each movie to redirect view movie details page
function MovieCard({ filteredType, moreMovies }) {
    const urlRegex = /\s/g;
    return (
      filteredType.slice(0, moreMovies).map((movie) => (

            <div key={movie.id} className="movie">
              <Link to={`/${movie.id}/${movie.title.toLowerCase().replace(urlRegex, '-')}`} style={{ textDecoration: 'none' }}>
                <img src={movie.images['Poster Art'].url} alt="cover" />
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
