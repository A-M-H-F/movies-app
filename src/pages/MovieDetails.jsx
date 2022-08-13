import { useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import '../assets/scss/moviedetails.scss';

function MovieDetails() {
  const { id } = useParams();

  const { data: movie, error, isPending } = useFetch(`https://amhf-movies.herokuapp.com/movies/${id}`);

  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movie && (
        <div className="movie-card">
          <div className="container">
            <img src={movie.images['Poster Art'].url} alt="cover" className="cover" />
            <div className="hero">
              <div className="details">
                <div className="title1">
                  { movie.title }
                  <span>{ movie.releaseYear }</span>
                  {' '}
                </div>
                <br />
                <div className="title2">{ movie.title }</div>
              </div>
            </div>
            <div className="description">
              <div className="column1">
                <br />
                <br />
                <br />
                <span className="tag">{ movie.programType }</span>
                <span className="tag">{ movie.releaseYear }</span>
              </div>
              <div className="column2">
                <p>{ movie.description }</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
