import styles from './ChooseWord.module.css';

const ChooseWord = ({ question }) => {
  let moreEnglish;

  if (question.word.english.length > 0) {
    moreEnglish = question.word.english.slice(1);
  }

  return (
    <div className={styles.chooseWord}>
      <div className={styles.prompt}>Choose the correct translation</div>
      <div className={styles.question}>
        <span>How do you say</span>
        <div className={styles.wordContainer}>
          <span className={styles.word}>{question.word.english[0]}</span>

          {moreEnglish.length !== 0 && (
            <span className={styles.moreEnglish}>
              Also:
              {moreEnglish.map((eng, idx) => (
                <p key={idx}>{eng}</p>
              ))}
            </span>
          )}
        </div>
        <span>in Tagalog?</span>
      </div>
    </div>
  );
};

export default ChooseWord;
