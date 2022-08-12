/* eslint-disable */
import { Link } from 'react-router-dom';
function FilterSearchData({ filteredResults }) {
    return (
        filteredResults.map((movie) => (
            <div key={movie.id} className="movie">
                <Link to={`/movies/${movie.id}}`} style={{ textDecoration: 'none' }}>
                    <img src={movie.images['Poster Art'].url} alt="" />

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

export default FilterSearchData;