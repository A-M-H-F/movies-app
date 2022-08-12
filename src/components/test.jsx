import { useState } from 'react';
import FilterSearchData from './FilterSearch';
import MovieCard from './MoviesCard';
import './movielist.css';

function MovieList({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [moreMovies, setMoreMovies] = useState(20);

  const loadMoreMovies = () => {
    setMoreMovies((lastValue) => lastValue * 2);
  };

  const searchData = (value) => {
    setSearchTerm(value);
    if (searchTerm !== '') {
      const filteredData = movies.filter((movie) => Object.values(movie.title).join('').toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(movies);
    }
  };

  return (

    <div className="main-fix">

      {/* NavBar for Search and Filter */}
      <nav className="navbar">
        <input className="search f-left" type="text" placeholder="Search..." onChange={(e) => searchData(e.target.value)} />
      </nav>

      <div className="main">
        {
          searchTerm.length >= 3 ? <FilterSearchData filteredResults={filteredResults} /> : <MovieCard movies={movies} moreMovies={moreMovies} />
        }
      </div>
      <div className="load-more-container">
        {moreMovies <= 100 && searchTerm.length <= 0 ? <button type="button" className="load-more" onClick={loadMoreMovies}>Load More</button> : null}
      </div>
    </div>
  );
}

export default MovieList;
