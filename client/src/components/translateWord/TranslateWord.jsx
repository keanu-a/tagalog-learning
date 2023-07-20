import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './TranslateWord.module.css';
import Loading from '../loading/Loading';

// wordData has attributes like
// - english ''
// - examples (array)
// - partOfSpeech ''
// - root ''
// - stress { letter: '', place: Number }
// - tagalog ''
// - _id ''

function TranslateWord() {
  const [wordData, setWordData] = useState(null);
  const { word } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/word/${word}`)
      .then((res) => res.json())
      .then((data) => {
        setWordData(data.word);
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      {wordData === null && <Loading />}

      {wordData !== null && (
        <div className={styles.container}>
          <h3 className={styles.tagalog}>{wordData.tagalog}</h3>
          <h5>English: {wordData.english}</h5>

          <p>Part of Speech: {wordData.partOfSpeech}</p>
          <p>Root: {wordData.root}</p>
        </div>
      )}
    </>
  );
}

export default TranslateWord;
