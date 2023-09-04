import styles from './AnswerPhrase.module.css';

function AnswerPhrase({ question }) {
  console.log(question);

  return <div className={styles.answerPhrase}>AnswerPhrase</div>;
}

export default AnswerPhrase;
