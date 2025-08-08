import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [movies, setMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // manage current slide


  useEffect(() => {
    fetch('/db.json') // This points to the db.json file in the public folder
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) // Extract movies data
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to previous slide
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0); // toggle between slides
  };

  // Function to next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0); // toggle between slides
  };

  return (
    <div className="hero-section">
      <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-text">
          <h2>Gotta Watch</h2>
          <p>Rent now! Starting at $3.99</p>
        </div>
        <div className="movie-posters">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
        {/* button link */}
        <Link to="/moviesandtvshows" className="learn-more-btn">Learn More</Link>
      </div>

      <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="slide-text">
          <h2>In Demand</h2>
          <p>Login for more details</p>
        </div>
        <div className="movie-posters">
          {movies.slice(4, 8).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
        {/* button link */}
        <Link to="/moviesandtvshows" className="learn-more-btn">Learn More</Link>
      </div>

      <div className="slideshow-controls">
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
