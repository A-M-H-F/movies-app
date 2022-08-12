import MovieList from '../components/MovieList';
import useFetch from '../components/useFetch';

function Home() {
  const { error, isPending, data: movies } = useFetch('http://localhost:1998/movies');
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { movies && <MovieList movies={movies} /> }
    </div>
  );
}

export default Home;
