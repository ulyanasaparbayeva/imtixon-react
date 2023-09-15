import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Container} from "../../utils/Utils";
import './MoviesDetails.scss'
import Star from '../../images/Star.png'


const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const API_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU';

  useEffect(() => {
    axios.get(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => {
        console.log(response.data)
        setMovie(response.data);
      })
      .catch(err => {
        console.error("Error fetching movie details:", err);
        setError(err);
      });
  }, [id]);
  console.log(movie)

  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movies-details-bg">
      <Container>
        <div className="movies-details">
          <div>
            <img className="movies-details-images"
                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
          <div>
            <h2 className="movies-details-title">{movie.title}</h2>
            <div className="movies-details-text">{movie.overview}</div>
            <div className="movies-details-info">
              <div className="movies-details-vote">
                <img src={Star}/>
                {movie.vote_average}
              </div>
              <div className="movies-details-date">Date: {movie.release_date}</div>
            </div>
            <div className="movies-details-language">language: {movie.original_language}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoviesDetails;
