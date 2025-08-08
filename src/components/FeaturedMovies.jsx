import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Update the fetch URL to point to the json file in the public folder
    fetch('/db.json') // This points to the db.json file in the public folder
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) // Set movies data
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);
  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {/* button for FeaturedMovies */}
      <Link to="/moviesandtvshows" className="learn-more-button">Learn More</Link>
    </section>
  );
}
