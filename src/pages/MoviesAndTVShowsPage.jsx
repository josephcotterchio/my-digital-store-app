import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesAndTVShowsPage({ movies, tvShows }) {
  return (
    <div className="movies-and-tvshows-page">
      <div className="movies">
        <h2>Movies</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="tvshows">
        <h2>TV Shows</h2>
        <div className="tvshow-list">
          {tvShows.map((tvShow) => (
            <Link key={tvShow.id} to={`/tvshow/${tvShow.id}`} className="tvshow-card">
              <img src={tvShow.poster} alt={tvShow.title} />
              <h3>{tvShow.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
