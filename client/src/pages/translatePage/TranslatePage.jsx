import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/pageHeader/PageHeader';

import styles from './TranslatePage.module.css';

function TranslatePage() {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    navigate(searchValue);
  };

  return (
    <>
      <Navbar />

      <main>
        <PageHeader text="Find a Translation" />

        <section className={styles.content}>
          <form className={styles.search} onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Search a word..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleOnSubmit}>
              <SearchIcon />
            </button>
          </form>

          <Outlet />
        </section>
      </main>
    </>
  );
}

export default TranslatePage;
