import { Outlet } from 'react-router-dom';

import Navbar from '../../layouts/navbar/Navbar';
import PageHeader from '../../layouts/pageHeader/PageHeader';

import SearchBar from '../../components/searchBar/SearchBar';

import styles from './TranslatePage.module.css';

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
