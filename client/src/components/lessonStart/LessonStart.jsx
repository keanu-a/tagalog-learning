import styles from './LessonStart.module.css';

import NextButton from '../nextButton/NextButton';

function LessonStart({ title, dispatch }) {
  return (
    <div className={styles.start}>
      <div className={styles.prompt}>
        <h3>
          Lesson: <strong className={styles.title}>{title}</strong>
        </h3>

        <div>
          <p>Are you ready?</p>
          <NextButton text="Ready" dispatch={dispatch} dispatchType="start" />
        </div>
      </div>
    </div>
  );
}

export default LessonStart;
