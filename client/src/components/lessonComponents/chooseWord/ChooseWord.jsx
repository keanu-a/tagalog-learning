import styles from './ChooseWord.module.css';

const ChooseWord = ({ question }) => {
  return (
    <div className={styles.chooseWord}>
      <div className={styles.prompt}>Choose the correct translation</div>
      <div className={styles.question}>
        <span>How do you say</span>
        <span className={styles.word}>{question.word.english}</span>
        <span>in Tagalog?</span>
      </div>
    </div>
  );
};

export default ChooseWord;
