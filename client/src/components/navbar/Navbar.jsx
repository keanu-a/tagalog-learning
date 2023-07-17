import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo lesson={false} />

        <ul>
          <li>
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li>
            <NavLink to="/translate">Translate</NavLink>
          </li>
          <li>
            <NavLink to="/conjugate">Conjugate</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
