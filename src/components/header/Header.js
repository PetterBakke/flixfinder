import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FlixFinder</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Popular</a>
        <a href="#">New Releases</a>
        <a href="#">Favorites</a>
        <a href="#">Profile</a>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;