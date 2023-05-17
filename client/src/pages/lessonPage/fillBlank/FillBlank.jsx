import React from 'react';

const FillBlank = ({ question, clickedIdx }) => {
  const tagalogPhrase = question.phrase.tagalog;

  let splitPhrase = tagalogPhrase.split(' ');
  const wordCount = splitPhrase.length;

  return (
    <div className="question-container">
      <div className="instruction">Complete the sentence</div>

      <div className="sub-translation">{question.phrase.english}</div>

      <div className="question">
        {splitPhrase.map((word, idx) => {
          return (
            <p
              className={idx === question.hideWord ? 'chosen-option' : 'word'}
              key={idx}
            >
              {idx === question.hideWord
                ? clickedIdx !== null
                  ? question.options[clickedIdx].tagalog
                  : '?'
                : word}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FillBlank;
