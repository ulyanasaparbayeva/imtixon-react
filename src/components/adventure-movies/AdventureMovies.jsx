import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdventureMoviesList from "../adventure-movies-list/AdventureMoviesList";

const AdventureMovies = () => {
  const [adventureMovies, setAdventureMovies] = useState([]);
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?&with_genres=12';
  const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU';

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => {
        setAdventureMovies(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <AdventureMoviesList movies={adventureMovies} />
    </div>
  );
};

export default AdventureMovies;
