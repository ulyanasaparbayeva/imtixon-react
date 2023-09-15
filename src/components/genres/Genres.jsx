import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenresList from '../genres-list/GenresList';

const Genres = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?&with_genres=28';
  const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU';

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => {
        setActionMovies(response.data.results);

      })
      .catch(error => {
        console.error("Error fetching data from the API: ", error);
      });
  }, []);

  return (
    <div>
      <GenresList movies={actionMovies} />
    </div>
  );
}

export default Genres;
