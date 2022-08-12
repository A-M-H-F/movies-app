/* eslint-disable */
import { Link } from 'react-router-dom';
function FilterSearchData({ filteredResults }) {
    const urlRegex = /\s/g;
    return (
        filteredResults.map((movie) => (
            <div key={movie.id} className="movie">
                <Link to={`/${movie.id}/${movie.title.toLowerCase().replace(urlRegex, '-')}`} style={{ textDecoration: 'none' }}>
                    <img src={movie.images['Poster Art'].url} alt="" />

                    <div className="movie-info">
                        <span>{movie.releaseYear}</span>
                        <span>{movie.programType}</span>
                    </div>
                </Link>
            </div>
        ))
    );
}

export default FilterSearchData;