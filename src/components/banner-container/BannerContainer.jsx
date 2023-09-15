import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../banner/Banner';

const BannerContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?&with_networks=213', {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU"
          }
        });
        setMovies(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchData();
  }, []);

  return <Banner movies={movies} />;
}

export default BannerContainer;
