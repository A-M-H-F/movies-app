/* eslint-disable */
import { useEffect } from 'react';

function Filter({ movies, setActiveCategory, activeCategory, setFilteredType }) {
    useEffect(() => {
        if (activeCategory === movies) {
            setFilteredType(movies);
            return;
        }
        const filtered = movies.filter((movie) => movie.programType.includes(activeCategory));
        setFilteredType(filtered);
    }, [activeCategory]);

    return (
        <div className="filter-c">
            <button type="button" className={activeCategory === movies || activeCategory === '' ? 'active' : ""} onClick={() => setActiveCategory('')}>All</button>
            <button type="button" className={activeCategory === 'movie' ? 'active' : ""} onClick={() => setActiveCategory('movie')}>Movies</button>
            <button type="button" className={activeCategory === 'series' ? 'active' : ""} onClick={() => setActiveCategory('series')}>Series</button>
        </div>
    );
}

export default Filter;
