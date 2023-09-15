import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedMoviesList from "../animated-movies-list/AnimatedMoviesList";


const  AnimatedMovies = () => {
  const [animatedMovies, setAnimatedMovies] = useState([]);
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?&with_genres=16';
  const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU';


  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => {
        setAnimatedMovies(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <AnimatedMoviesList animatedMovies={animatedMovies} />
    </div>
  )
}
export default AnimatedMovies