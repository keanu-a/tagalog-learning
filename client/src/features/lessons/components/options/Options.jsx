import styles from './Options.module.css';

import playAudio from '../../../../services/playAudio';

function Options({
  question,
  dispatch,
  checkedAnswer,
  answeredCorrectly,
  correctAnswer,
  selectedOption,
}) {
  const options = question.options;

  const disableButtonsUpdateColors = (idx) => {
    if (answeredCorrectly !== null) {
      if (idx === correctAnswer) return 'correct';
      return 'incorrect';
    }
  };

  return (
    <div className={styles.options}>
      {options.map((option, idx) => (
        <button
          key={option._id}
          className={`${styles.option} ${
            checkedAnswer && 'disabled'
          } ${disableButtonsUpdateColors(idx)} ${
            selectedOption === idx && styles.clicked
          }`}
          onClick={() => {
            dispatch({ type: 'clicked', payload: idx });
            // playAudio(option.audioUrl);
          }}
        >
          {option.tagalog}
        </button>
      ))}
    </div>
  );
}

export default Options;
