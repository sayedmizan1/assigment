import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Course List</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-course">Add Course</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;