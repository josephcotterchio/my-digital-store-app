import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}