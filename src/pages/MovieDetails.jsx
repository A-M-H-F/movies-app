import { /* useHistory, */ useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import './moviedetails.scss';

function MovieDetails() {
  const { id } = useParams();

  const { data: movie, error, isPending } = useFetch(`https://amhf-movies.herokuapp.com/movies/${id}`);

  // const history = useHistory();

  // handleClick Function to delete a movie
  /*
  const handleClick = () => {
    fetch('http://localhost:1998/movies/' + movie.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  } */

  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
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
            {/* Delet Movie <button onClick={handleClick}>delete</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
