import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { id } = useParams(); // Get movie ID from params
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie data:', error));
  }, [id]);  // fetch when ID change

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.largePoster} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <p>Rent Price: {movie.rentPrice}</p>
      <p>Buy Price: {movie.buyPrice}</p>
    </div>
  );
}
