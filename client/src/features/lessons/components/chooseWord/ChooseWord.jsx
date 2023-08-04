import styles from './ChooseWord.module.css';

const ChooseWord = ({ question }) => {
  let english;
  let moreThanOneEnglishTranslation = false;

  if (Array.isArray(question.word.english)) {
    english = question.word.english[0];
    moreThanOneEnglishTranslation = true;
  } else {
    english = question.word.english;
    moreThanOneEnglishTranslation = false;
  }

  return (
    <div className={styles.chooseWord}>
      <div className={styles.prompt}>Choose the correct translation</div>

      <div className={styles.question}>
        <span>How do you say this word in Tagalog?</span>

        <div className={styles.wordContainer}>
          <span className={styles.word}>
            {!moreThanOneEnglishTranslation ? english : english[0]}
          </span>

          {moreThanOneEnglishTranslation && (
            <span className={styles.moreEnglish}>
              Also:
              {question.word.english.map((eng, idx) => (
                <p key={idx}>{eng}</p>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseWord;
