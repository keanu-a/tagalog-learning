import React from 'react';

const ChooseWord = ({ question }) => {
  return (
    <div className="question-container">
      <div className="instruction">Choose the correct translation</div>
      <div className="question">
        How do you say "{question.word.english}" in Tagalog?
      </div>
    </div>
  );
};

export default ChooseWord;
