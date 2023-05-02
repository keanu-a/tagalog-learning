import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

import logoUrl from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  // Create a function when clicked, navigate to correct URL. Keep underline
  const handleOnClick = (url) => {
    navigate(url);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <img alt="Tagalog Learning Logo" height="60" width="60" src={logoUrl} />
        <div>TagalogLearning.com</div>
      </div>

      <div className="page-nav">
        <button onClick={() => handleOnClick('/start-learning')}>
          Start Learning
        </button>
        <button onClick={() => handleOnClick('/conjugate')}>Conjugate</button>
      </div>

      <div className="user-control">
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default Navbar;
