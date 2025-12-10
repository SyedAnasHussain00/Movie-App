import React from "react";

const MovieCard = ({ movie }) => {
    return(
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">
            <div className='movie'>
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placholder.com/400'} alt={movie.title} />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </a>
    )
}

export default MovieCard;