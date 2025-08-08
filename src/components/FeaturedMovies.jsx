import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedMovies({ movies }) {
  // if movies has data
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>Loading Movies...</div>;  // load message
  }
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
