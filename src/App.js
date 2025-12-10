import React, { useState } from 'react';
import { Toaster, toast } from "react-hot-toast";

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

//5a06f757

const API_URL = 'https://www.omdbapi.com?apikey=5a06f757';

// const movie1 = {
//     "Title": "Avengers: Endgame",
//     "Year": "2019",
//     "imdbID": "tt4154796",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
// }

function App() {

  const [search, setSearch] = useState("");
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const seacrMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if(data.Response == 'True'){
      setmovies(data.Search);
    } else {
      showError(data.Error);
    }
    setLoading(false);
  };

    const submit = (e) => {
      e.preventDefault();
      if(search){
        seacrMovies(search);
      }else{
      showError('Enter Movie Name')
      }
    }
    const showError = (msg) => {
        toast.error(msg);
    }
  return (
    <div className='app'>
      
      <Toaster />

      {loading && (
        <div className='anim_overlay'>
          <div className="loader"></div>
        </div>
      )}
      <h1>Movie App</h1>

      <div className='search'>
        <form onSubmit={submit}>
        <input
          placeholder='Search Movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>
          <img src={SearchIcon} />
        </button>
        </form>
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )}
    </div>
  );
}

export default App;