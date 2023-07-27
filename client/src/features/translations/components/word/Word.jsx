import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Word.module.css';
import Loading from '../../../../components/loading/Loading';

import normalizeString from '../../../../utils/normalizeString';

// wordData has attributes like
// - tagalog ''
// - english ['']
// - root ''
// - partOfSpeech ''
// - _id ''

function Word() {
  const [isLoading, setIsLoading] = useState(false);
  const [wordData, setWordData] = useState(null);
  const { word } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/v1/word/${word}`)
      .then((res) => res.json())
      .then((data) => {
        setWordData(data.word);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  if (!wordData) return <div className={styles.container}>Word not Found</div>;

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.tagalog}>{normalizeString(wordData.tagalog)}</h3>
        <div className={styles.translation}>
          <h5>English: </h5>
          <div className={styles.english}>
            {wordData.english.map((word, idx) => (
              <h5 key={idx}>{word}</h5>
            ))}
          </div>
        </div>

        <p>Root: {wordData.root}</p>
        <p>Part of Speech: {wordData.partOfSpeech}</p>
      </div>

      {wordData.partOfSpeech === 'verb' && (
        <ul className={styles.tenses}>
          <h5 className={styles.conjugations}>Conjugations</h5>
          <li>PAST: {normalizeString(wordData.conjugations.past.tagalog)}</li>
          <li>
            PRESENT: {normalizeString(wordData.conjugations.present.tagalog)}
          </li>
          <li>
            FUTURE: {normalizeString(wordData.conjugations.future.tagalog)}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Word;
