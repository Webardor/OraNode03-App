import React from 'react';
import './Headerbar.css';

export default function Headerbar({ onToggleSidebar, onLogout, user }) {
  return (
    <div className="headerbar">
      <div className="header-left">
        <span className="hamburger" onClick={onToggleSidebar}>&#9776;</span>
        <h1 className="header-title">My Application</h1>
      </div>
      <div className="header-right">
        {user && <span className="user-greeting">Welcome, {user.id}</span>}
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}