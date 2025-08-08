import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies') // fetch movie data
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movie data:', error));

    fetch('http://localhost:5000/tvShows') // fetch TV data
      .then(response => response.json())
      .then(data => setTvShows(data))
      .catch(error => console.error('Error fetching TV show data:', error));
  }, []);

  return (
    <div>
      <HeroSection movies={movies} />
      <FeaturedMovies movies={movies} />
      <FeaturedTVShows tvShows={tvShows} />
      <ContentSection />
    </div>
  );
}
