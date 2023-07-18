import styles from './LessonStart.module.css';

function LessonStart({ title, dispatch }) {
  return (
    <div className={styles.start}>
      <div className={styles.prompt}>
        <h3>
          Lesson: <strong className={styles.title}>{title}</strong>
        </h3>

        <div>
          <p>Are you ready?</p>
          <button
            className={styles.btnStart}
            onClick={() => dispatch({ type: 'start' })}
          >
            Ready
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonStart;
