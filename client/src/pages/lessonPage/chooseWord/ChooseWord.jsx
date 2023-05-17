import React from 'react';

const ChooseWord = ({ question, clickedIdx }) => {
  return (
    <div className="question-container">
      <div className="instruction">Choose the correct translation</div>
      <div className="question">
        How do you say "{question.word.english}" in Tagalog?
      </div>

      <div
        className={`chosen-option ${
          clickedIdx ? 'fit-content' : 'placeholder'
        }`}
      >
        {clickedIdx === null ? '' : question.options[clickedIdx].tagalog}
      </div>
    </div>
  );
};

export default ChooseWord;
