import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection'; 
import FeaturedMovies from './components/FeaturedMovies'; 
import FeaturedTVShows from './components/FeaturedTVShows'; // not referenced, keep for now
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesAndTVShowsPage from './pages/MoviesAndTVShowsPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TVShowDetailsPage from './pages/TVShowDetailsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Header from './components/Header';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    // Fetch movie data and TV show data from local JSON file in public folder
    fetch('/db.json') // This points to the db.json file placed in the public folder
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies); // Set movies data
        setTvShows(data.tvShows); // Set TV shows data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} tvShows={tvShows} />} />
          <Route path="/moviesandtvshows" element={<MoviesAndTVShowsPage movies={movies} tvShows={tvShows} />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/tvshow/:id" element={<TVShowDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
