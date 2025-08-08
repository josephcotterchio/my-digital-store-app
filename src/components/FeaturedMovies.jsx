import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Update the fetch URL to point to the json file in the public folder
    fetch('/db.json') // This points to the db.json file in the public folder
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.movies)) {
          setMovies(data.movies); // Set movies data if it's an array
        } else {
          console.error('Movies data is not an array');
        }
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster || '/assets/default-poster.jpg'} // Fallback image if no poster
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
      {/* button for FeaturedMovies */}
      <Link to="/moviesandtvshows" className="learn-more-button">
        Learn More
      </Link>
    </section>
  );
}
