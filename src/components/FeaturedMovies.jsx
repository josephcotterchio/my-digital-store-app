import React, { useState, useEffect } from 'react';

export default function FeaturedTVShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('/db.json') 
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) // Set movies data
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
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
