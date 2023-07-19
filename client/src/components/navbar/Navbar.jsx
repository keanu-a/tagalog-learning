import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import Logo from '../logo/Logo';

const navLinks = [
  {
    link: '/learn',
    text: 'Learn',
  },
  {
    link: '/translate',
    text: 'Translate',
  },
  {
    link: '/conjugate',
    text: 'Conjugate',
  },
  {
    link: '/login',
    text: 'Login',
  },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo lesson={false} />

        <ul>
          {navLinks.map(({ link, text }) => (
            <li key={text}>
              <NavLink to={link}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
