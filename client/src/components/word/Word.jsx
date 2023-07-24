import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Word.module.css';
import Loading from '../loading/Loading';

// wordData has attributes like
// - english ''
// - examples (array)
// - partOfSpeech ''
// - root ''
// - stress { letter: '', place: Number }
// - tagalog ''
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        isLoading(false);
      });
  }, []);

  return (
    <>
      {/* If loading, show loading */}
      {isLoading && <Loading />}

      {/* If no word data and not loading, then not found */}
      {wordData === null && !isLoading && (
        <div className={styles.container}>Word not Found</div>
      )}

      {/* If there is word data, display word */}
      {wordData !== null && (
        <div className={styles.container}>
          <div>
            <h3 className={styles.tagalog}>{wordData.tagalog}</h3>
            <h5>English: {wordData.english}</h5>

            <p>Root: {wordData.root}</p>
            <p>Part of Speech: {wordData.partOfSpeech}</p>
          </div>

          {wordData.partOfSpeech === 'verb' && (
            <ul className={styles.tenses}>
              <h5 className={styles.conjugations}>Conjugations</h5>
              <li>Present: {wordData.tenses.present}</li>
              <li>Past: {wordData.tenses.past}</li>
              <li>Future: {wordData.tenses.future}</li>
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Word;
