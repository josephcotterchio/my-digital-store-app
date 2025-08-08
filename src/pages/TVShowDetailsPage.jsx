import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TVShowDetailsPage() {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/tvShows/${id}`)  // Fetch from json-server
      .then((response) => response.json())
      .then((data) => setTvShow(data))
      .catch((error) => console.error('Error fetching TV show data:', error));
  }, [id]);

  return (
    tvShow && (
      <div className="tvshow-details-page">
        <div className="tvshow-detail-card">
          <img src={tvShow.poster} alt={tvShow.title} className="small-poster" />
          <div className="tvshow-detail-info">
            <h2>{tvShow.title}</h2>
            <p>{tvShow.synopsis}</p>
            <p>Seasons: {tvShow.seasonCount}</p>
            <p>Rent: {tvShow.rentPrice} | Buy: {tvShow.buyPrice}</p>
          </div>
          <img src={tvShow.largePoster} alt={tvShow.title} className="large-poster" />
        </div>
      </div>
    )
  );
}
