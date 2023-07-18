import styles from './LessonButton.module.css';

// Lesson button will remain disabled until an option is selected
// When an option is selected, this button will be 'Check'
// When 'Check' is clicked, it turns into 'Next'
// If are are no more questions, this button will render Finished page

function LessonButton({
  dispatch,
  questionIdx,
  amountOfQuestions,
  selectedOption,
  checkedAnswer,
  answeredCorrectly,
}) {
  const NEXT_DISPATCH_TYPE = { type: 'next' };
  const FINISH_DISPATCH_TYPE = { type: 'finish' };
  const CHECK_DISPATCH_TYPE = { type: 'check' };

  // If answer is checked, next question or finish
  // Else, check if answer is correct
  const onButtonClick = () => {
    if (checkedAnswer)
      dispatch(
        questionIdx < amountOfQuestions - 1
          ? NEXT_DISPATCH_TYPE
          : FINISH_DISPATCH_TYPE
      );
    else dispatch(CHECK_DISPATCH_TYPE);
  };

  const updateColors = () => {
    if (answeredCorrectly !== null) {
      if (answeredCorrectly) return 'correct';
      return 'incorrect';
    }
  };

  return (
    <button
      onClick={onButtonClick}
      disabled={!selectedOption ? true : false}
      className={`${!selectedOption && styles.disabled} ${updateColors()}`}
    >
      {!checkedAnswer ? 'Check' : 'Next'}
    </button>
  );
}

export default LessonButton;
