import './Country.scss'
import {Container} from "../../utils/Utils";
import React, { useState, useEffect } from 'react';
import axios from "axios";



const Country = () => {

  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState('');


  useEffect(() => {
    axios("https://api.themoviedb.org/3/watch/providers/regions", {
      headers: {
        "Authorization": "Bearer CJdLCJ2ZXJzaW9uIjoxfQ.CSEzLW6FsE3zHnAoEONl8XomflmfvWBB7ZNASDlZuSU"
      }
    })
      .then(response => {
        console.log(response.data);
        if (response.data.results && Array.isArray(response.data.results)) {
          setProviders(response.data.results);
        }
      })

      .catch(error => {
        console.error("Error fetching providers:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        }
      });

  }, []);

console.log(providers)

  return (
    <div className="country">
      <Container>
        <div className="search__group">
          <div className="custom-select">
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
            >
              <option value="" disabled>Select a Provider</option>
              {providers.map(provider => (
                <option key={provider.id} value={provider.id}>
                  {provider.native_name}
                </option>
              ))}
            </select>
          </div>
          <input type="text" placeholder="search"/>
        </div>
      </Container>
    </div>
  )
}
export default Country


