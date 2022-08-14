/* eslint-disable */
import { useState } from 'react';
import Filter from './MoviesFilter';
import SortMovie from './SortMovie';
import MovieCard from './MoviesCard';
import '../assets/css/movielist.css';

function MovieList({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const [moreMovies, setMoreMovies] = useState(20);

  const [filteredType, setFilteredType] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const [sortMovies, setSortMovies] = useState('');
  const space = ' ';

  const sortMoviesByYear = movies.filter((movie) => {
    if (sortMovies && sortMovies !== 'all' && activeCategory === 'movie') {
      return movie.releaseYear.toString() === sortMovies && movie.programType === 'movie';
    } if (sortMovies && sortMovies !== 'all' && activeCategory === 'series') {
      return movie.releaseYear.toString() === sortMovies && movie.programType === 'series';
    } if (sortMovies && sortMovies !== 'all' && activeCategory === '') {
      return movie.releaseYear.toString() === sortMovies && movie.programType;
    } return movie;
  });

  const sortByYearSelected = (selectedValue) => {
    setSortMovies(selectedValue);
  };

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

  // reset all filter options
  let selectYear = document.querySelector('#select-year');
  let searchText = document.querySelector('#search-text');
  function resetF() {
    searchData('')
    sortByYearSelected('all')
    setActiveCategory('')
    searchText.value = null
    selectYear.value = 'all'
  };

  return (
    <div className="main-list">
      {/* NavBar for Search and Filter */}
      <nav className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Search Movie / Series... min:3" onChange={(e) => searchData(e.target.value)} />
        <button onClick={resetF} type="button" className="clear-filter">Clear Filter</button>
      </nav>
      <span className="nosubmit">
        <Filter movies={movies} setFilteredType={setFilteredType} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </span>
      <span className="s-name">
        <SortMovie movies={movies} sortByYearSelected={sortByYearSelected} />
        <h1 className="filter-title">{activeCategory === '' ? 'ALL' + space + sortMovies.toUpperCase() : sortMovies.toUpperCase() + space + activeCategory.toUpperCase()}</h1>
      </span>
      <div className="main">
        <h1 className="not-found">{sortMoviesByYear.length <= 0 ? 'Not Found...' : null}</h1>
        <MovieCard filteredType={filteredType} moreMovies={moreMovies} searchTerm={searchTerm} sortMovies={sortMovies} filteredResults={filteredResults} sortMoviesByYear={sortMoviesByYear} />
      </div>
      {moreMovies <= 100 && searchTerm.length <= 0 && sortMoviesByYear.length >= 20 ? <div className="load-more-container"><button type="button" className="load-more" onClick={loadMoreMovies}>Load More</button></div> : null}
    </div>
  );
}

export default MovieList;
