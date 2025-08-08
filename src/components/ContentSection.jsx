import React, { useEffect, useState } from 'react';

export default function ContentSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) 
      .catch((error) => console.error('Error fetching movie data:', error));
  }, []);

  if (movies.length === 0) {
    return <div>Loading Award Winners...</div>;
  }

  return (
    <section className="content-section">
      <h2>Award Winners</h2>
      <p>Only on Netfix</p>
      <div className="movie-posters">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <a href="/moviesandtvshows" className="learn-more">Learn More</a>
    </section>
  );
}
