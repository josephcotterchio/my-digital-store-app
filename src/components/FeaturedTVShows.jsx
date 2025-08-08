import React, { useState, useEffect } from 'react';

export default function FeaturedTVShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tvShows')
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data);
      })
      .catch((error) => console.error('Error fetching TV Shows data:', error));
  }, []);

  // check if tvShows is array has content
  if (!Array.isArray(tvShows) || tvShows.length === 0) {
    return <div>Loading TV Shows...</div>;
  }

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
