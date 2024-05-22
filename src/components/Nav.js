import React from 'react';
import './Nav.css';

export default function Nav({ setPage }) {
  return (
    <div className="nav-container">
      <div className='nav-item' onClick={() => setPage("Profile")}>Profile Page</div>
      <div className='nav-item' onClick={() => setPage("Login")}>Login Page</div>
    </div>
  );
}
