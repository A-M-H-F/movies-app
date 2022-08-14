/* eslint-disable */
import { useEffect } from 'react';

function SortMovie({ movies, sortByYearSelected }) {
    // get release years
    const getYears = movies.map((movie) => movie.releaseYear);
    // remove duplicates
    const filterYears = getYears.filter(function (year, d) {
        return getYears.indexOf(year) == d;
    }).sort(function (a, b) { return a - b })

    function sortByYear(e) {
        sortByYearSelected(e.target.value);
    }

    return (
        <div className="select-filter-container">
            <select className="select-filter" id="select-year" data-live-search="true" onChange={sortByYear}>
                <option value={''}>Release Year</option>
                {filterYears.map((year) => (
                    <option className="sort-option" value={year} key={year}>{year}</option>
                ))}
            </select>
        </div>
    );
}

export default SortMovie;
