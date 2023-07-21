import { useState } from 'react';

import styles from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ inHome }) {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    if (inHome === true) navigate(`translate/${searchValue}`);
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
      <button className={styles.btn} onClick={handleOnSubmit}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
