import React from 'react';

import {
  IcBaselineCheckCircle,
  IcBaselineError,
} from '../../../assets/icons/Icons';

import '../LessonPage.scss';

// This button is disabled when no option is clicked
// If an option is clicked, then the button displays check
// - When clicked, checks if the option is correct or wrong
// - If correct, the button turns green
// - If incorrect, the button turns red

const LessonButton = ({
  isAnswerCorrect,
  clickedIdx,
  verifyAnswer,
  question,
  handleNextQuestion,
}) => {
  let classes = '';

  if (question.questionType === 'conjugate') {
    if (clickedIdx[0] !== null && clickedIdx[1] !== null)
      classes = 'lesson-btn check-color';
    else classes = 'lesson-btn check-color disabled';
  }

  // Understanding button class names
  // - If answer is correct, green
  // - If answer is wrong, red
  // - If clickedIdx is null, disable
  // - If clickedIdx is NOT null, check if its an array
  //     - If it is an array, check if array is empty
  //         - If array is empty, disable
  //         - If array is full, enable
  //     - If not an Array, enable
  return (
    <div>
      <div className="lesson-btn-container">
        {isAnswerCorrect && (
          <div className="explanation correct-color">
            <IcBaselineCheckCircle className={'correct-icon'} />
            Correct!
          </div>
        )}

        {isAnswerCorrect == false && (
          <div className="explanation incorrect-color">
            <IcBaselineError className={'incorrect-icon'} />
            {`Correct Answer: ${
              question.word ? question.word.tagalog : question.phrase.tagalog
            }`}
          </div>
        )}

        <button
          className={
            isAnswerCorrect === true
              ? 'correct-color lesson-btn'
              : isAnswerCorrect === false
              ? 'incorrect-color lesson-btn'
              : clickedIdx !== null
              ? Array.isArray(clickedIdx)
                ? clickedIdx[0] !== null && clickedIdx[1] !== null
                  ? 'lesson-btn check-color '
                  : 'lesson-btn check-color disabled'
                : 'lesson-btn check-color'
              : 'lesson-btn check-color disabled'
          }
          disabled={clickedIdx === null ? true : false}
          onClick={
            isAnswerCorrect === null
              ? () => verifyAnswer(question)
              : () => handleNextQuestion()
          }
        >
          {isAnswerCorrect === null ? 'Check' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default LessonButton;
