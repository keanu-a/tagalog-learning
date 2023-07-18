import styles from './NextButton.module.css';

function NextButton({
  dispatch,
  questionIdx,
  amountOfQuestions,
  selectedOption,
}) {
  const NEXT_DISPATCH_TYPE = { type: 'next' };
  const FINISH_DISPATCH_TYPE = { type: 'finish' };

  return (
    <button
      onClick={() =>
        dispatch(
          questionIdx < amountOfQuestions - 1
            ? NEXT_DISPATCH_TYPE
            : FINISH_DISPATCH_TYPE
        )
      }
      disabled={selectedOption ? false : true}
      className={selectedOption ? styles.btn : styles.disabled}
    >
      Next
    </button>
  );
}

export default NextButton;
