import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

import styles from './SearchBar.module.css';

function SearchBar({ inHome }) {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const handleOnSubmit = () => {
    if (inHome) navigate(`translate/${searchValue}`);
    else navigate(searchValue);
  };

  return (
    <form className={styles.search} onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search a word..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
      />
      <button className={styles.btn} onClick={handleOnSubmit} type="button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
