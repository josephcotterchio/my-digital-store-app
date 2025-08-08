import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedTVShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('/db.json')  // Fetch the db.json file from the public directory
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.tvShows)) {  // Ensure the tvShows is an array
          setTvShows(data.tvShows);  // Set the tvShows data correctly
        } else {
          console.error('TV Shows data is not an array');
        }
      })
      .catch((error) => console.error('Error fetching TV Shows data:', error));
  }, []);

  return (
    <section className="featured-tvshows">
      <h2>Featured TV Shows</h2>
      <div className="tvshow-list">
        {tvShows.length > 0 ? (
          tvShows.slice(0, 4).map((tvShow) => (
            <div key={tvShow.id} className="tvshow-card">
              <img src={tvShow.poster || '/assets/default-poster.jpg'} alt={tvShow.title} />
              <h3>{tvShow.title}</h3>
              <Link to={`/tvshow/${tvShow.id}`} className="learn-more-btn">Learn More</Link>
            </div>
          ))
        ) : (
          <p>Loading TV Shows...</p>
        )}
      </div>
    </section>
  );
}
