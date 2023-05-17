import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

import logoUrl from '../../assets/logo.png';
import IcBaselineMenu from '../../assets/icons/IcBaselineMenu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  // Create a function when clicked, navigate to correct URL. Keep underline
  const handleOnClick = (url) => {
    navigate(url);
  };

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <img alt="Tagalog Learning Logo" height="60" width="60" src={logoUrl} />
        <div>TagalogLearning.com</div>
      </div>

      <div className="page-nav">
        <button
          className="page-nav-btn"
          onClick={() => handleOnClick('/start-learning')}
        >
          Start Learning
        </button>
        <button
          className="page-nav-btn"
          onClick={() => handleOnClick('/conjugate')}
        >
          Conjugate
        </button>
        <div className="user-control">
          <div>Sign In</div>
        </div>
      </div>

      <button className="nav-menu-btn" onClick={() => handleToggleMenu()}>
        <IcBaselineMenu />
      </button>

      <div className={`nav-menu ${toggleMenu === true ? '' : 'hide'}`}>
        <button
          className="page-nav-btn"
          onClick={() => handleOnClick('/start-learning')}
        >
          Start Learning
        </button>
        <button
          className="page-nav-btn"
          onClick={() => handleOnClick('/conjugate')}
        >
          Conjugate
        </button>

        <div className="user-control">
          <div>Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
