import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch('/db.json') // Relative path
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.movies.find((movie) => movie.id === parseInt(id)); // Find movie by ID
        setMovie(selectedMovie);
      })
      .catch((error) => console.error('Error fetching movie data:', error));
  }, [id]);

  return (
    movie && (
      <div className="movie-details-page">
        <div className="movie-detail-card">
          <img src={movie.poster} alt={movie.title} className="small-poster" />
          <div className="movie-detail-info">
            <h2>{movie.title}</h2>
            <p>{movie.synopsis}</p>
            <p>Rent: {movie.rentPrice} | Buy: {movie.buyPrice}</p>
          </div>
          <img src={movie.largePoster} alt={movie.title} className="large-poster" />
        </div>
      </div>
    )
  );
}
