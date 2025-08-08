import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedTVShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data);
      })
      .catch((error) => console.error('Error fetching TV Shows data:', error));
  }, []);

  return (
    <section className="featured-tvshows">
      <h2>Featured TV Shows</h2>
      <div className="tvshow-list">
        {tvShows.slice(0, 4).map((tvShow) => (
          <div key={tvShow.id} className="tvshow-card">
            <img src={tvShow.poster} alt={tvShow.title} />
            <h3>{tvShow.title}</h3>
            <a href={`/tvshow/${tvShow.id}`} className="learn-more-btn">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
