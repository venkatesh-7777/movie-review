import { useState, useEffect } from "react";
import axios from 'axios';

export default function Upcoming() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2RkMTVmYjEyZjAyNGY4NjFjZGUyMjBkMTg5ODdlOCIsIm5iZiI6MTc0MjQ5MDM0OC43NDU5OTk4LCJzdWIiOiI2N2RjNGFlYzJkYmE2Njg2MjU3ZmI2NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hx7TDF9nKu4NxXNMYbOaUCtywofHNiC8E76ppYRfiMk',  // Replace this with your actual access token
            Accept: 'application/json'
          }
        });
        setMovies(response.data.results); 
      } catch (e) {
        console.error(e);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      {movies ? (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title} 
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
}
