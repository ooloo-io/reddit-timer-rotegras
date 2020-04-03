import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
