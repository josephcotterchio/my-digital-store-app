import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';

export default function HomePage({ movies, tvShows }) {
  return (
    <div>
      <HeroSection />
      <FeaturedMovies movies={movies} />
      <FeaturedTVShows tvShows={tvShows} />
      <ContentSection />
    </div>
  );
}
