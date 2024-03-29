function NextButton({
  dispatch,
  questionIdx,
  amountOfQuestions,
  answeredCorrectly,
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
      className={`${answeredCorrectly ? 'correct' : 'incorrect'}`}
    >
      Next
    </button>
  );
}

export default NextButton;
