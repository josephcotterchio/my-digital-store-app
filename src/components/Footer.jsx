import React from "react";
import { Link } from "react-router-dom"; // React link

export default function Footer() {
  return (
    <footer>
      {/* Logo  */}
      <div className="footer-logo">
        <img src="/assets/Netfix-logo.png" alt="Netfix Logo" />
        <p>Netfix — Your fix for movies and TV shows</p>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        {/* 1st Column */}
        <div className="footer-column">
          <h3>Watch</h3>
          <ul>
            <li>
              <Link to="/moviesandtvshows">Movies & TV Shows</Link>
            </li>
          </ul>
        </div>

        {/* 2nd Column */}
        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>
              <Link to="/moviesandtvshows">All Offerings</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* SM Links */}
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
