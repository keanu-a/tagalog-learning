import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/pageHeader/PageHeader';

import styles from './TranslatePage.module.css';
import SearchBar from '../../components/searchBar/SearchBar';

function TranslatePage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader text="Find a Translation" />

        <section className={styles.content}>
          <SearchBar />

          <Outlet />
        </section>
      </main>
    </>
  );
}

export default TranslatePage;
