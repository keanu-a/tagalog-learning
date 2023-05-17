import React from 'react';

const Conjugate = ({ question, clickedIdx }) => {
  const words = [clickedIdx[0], clickedIdx[1]];

  return (
    <div className="question-container">
      <div className="instruction">
        Translate the sentence with proper conjugation
      </div>

      <div className="sub-translation">{question.phrase.english}</div>

      <div className="question">
        {words.map((word, idx) => {
          return (
            <p className="chosen-option" key={idx}>
              {word !== null ? word.tagalog : '?'}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Conjugate;
