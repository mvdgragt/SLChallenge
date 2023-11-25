import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <img src="/sl.png" alt="SL Logo" />
      <h1>top 10 busslinjerna</h1>
    </nav>
  );
};

export default Nav;