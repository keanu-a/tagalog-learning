import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '../logo/Logo';
import styles from './Navbar.module.css';

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
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false);

  const onMenuClick = () => {
    setToggleMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo lesson={false} />

        {/* Hamburger menu */}
        <div className={styles.menu} onClick={onMenuClick}>
          {toggleMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul className={toggleMenuOpen ? styles.open : ''}>
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
