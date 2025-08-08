import React from 'react';
import { Link } from 'react-router-dom'; // link import

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/Netfix-logo.png" alt="Netfix Logo" />
        </Link>
      </div>
      <div className="navbar">
        <div className="left">
          <Link to="/moviesandtvshows">Movies & TV Shows</Link> 
        </div>
        <div className="right">
          <Link to="/login">Login </Link> 
          <Link to="/register"> Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
