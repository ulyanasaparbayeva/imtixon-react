  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import './Parnters.scss'
  import {Container} from "../../utils/Utils";


  const Partners = () => {
    const [providers, setProviders] = useState(null);
    const API_URL = 'https://api.themoviedb.org/3/watch/providers/movie';
    const API_KEY = "Bearer   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1NjBmNjUyOTc5ZDFlZDU5YjlhYTBkMjE0M2JmYyIsInN1YiI6IjY1MDFhNzFkZmZjOWRlMGVkZjYxNWMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU";

    useEffect(() => {
      console.log("useEffect triggered");
      axios.get(API_URL, {
        headers: {
          'Authorization': API_KEY
        }
      })
        .then(response => {
          console.log(response.data)
          setProviders(response.data.results);
        })
        .catch(error => {
          console.error("Error fetching watch providers: ", error.message);
          console.error("Error details: ", error.response.data);
        });
    }, []);
   console.log(providers)


    return (
      <Container>
        <div className="partners-container">
          {providers ? (
            providers.map(provider => (
              <div key={provider.id} className="partners-group">
                <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt={provider.provider_name} />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    );
  }

  export default Partners