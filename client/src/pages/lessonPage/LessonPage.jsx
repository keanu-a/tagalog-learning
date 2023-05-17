import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import logoUrl from '../../assets/logo.png';
import './LessonPage.scss';

import Loading from '../../components/loading/Loading';
import ChooseWord from './chooseWord/ChooseWord';
import FillBlank from './fillBlank/FillBlank';
import Conjugate from './conjugate/Conjugate';
import LessonButton from './lessonButton/LessonButton';

// This component adds yellow to emphasis letter in words
const WordWithEmphasis = ({ word }) => {
  const stress = word.stress;
  const letters = word.tagalog.split('');

  // Each word in the DB has which letter to stress and the n-th number of that letter
  const stressLetter = stress.letter;
  const stressPlace = stress.place;

  let count = 0;

  return (
    <div>
      {letters.map((letter, index) => {
        if (letter === stressLetter) count += 1;

        // Only adds the css if the letter and place of that letter matches
        return (
          <span
            key={index}
            className={
              count === stressPlace && stressLetter === letter
                ? 'stress-letter'
                : ''
            }
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

const LessonPage = () => {
  const [completed, setCompleted] = useState(false);

  const [questionIdx, setQuestionIdx] = useState(0);
  const [foundLessonTitle, setFoundLessonTitle] = useState(null);
  const [foundLessonQuestions, setFoundLessonQuestions] = useState([]);

  const [clickedIdx, setClickedIdx] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const navigate = useNavigate();
  let { lessonTitle } = useParams();

  // Fetches all data from MongoDB only once when page loads
  useEffect(() => {
    async function fetchLesson() {
      const response = await fetch(
        `http://localhost:5000/api/v1/lesson/${lessonTitle}`
      );
      const foundData = await response.json();
      setFoundLessonTitle(foundData.lesson.title);

      // This is for adding the stress marks, since not easy to do with phrases
      foundData.lesson.questions.forEach((element, idx) => {
        element.isLearned = false;
      });

      setFoundLessonQuestions(foundData.lesson.questions);
    }

    fetchLesson();
  }, []);

  // Renders loading screen while fetching data
  if (!foundLessonTitle) {
    return <Loading />;
  }

  // Checks if the answer clicked matches the answer of the question
  const verifyAnswer = (question) => {
    if (question.questionType === 'conjugate') {
      // This works because words are stored in order in a phrase document in the DB
      const phrase = question.phrase;
      if (
        clickedIdx[0]._id !== phrase.words[0] ||
        clickedIdx[1]._id !== phrase.words[1]
      )
        setIsAnswerCorrect(false);
      else setIsAnswerCorrect(true);

      // This is for questions that are NOT type conjugate
    } else {
      clickedIdx === question.answer
        ? setIsAnswerCorrect(true)
        : setIsAnswerCorrect(false);
    }
  };

  // Handles options clicked when checking more than 1 option
  const handleMultipleOptions = (wordObject) => {
    let openIndices = [...clickedIdx];
    let changedClickedIdx = false;

    // If both indices are null, fill the first one
    if (clickedIdx[0] === null && clickedIdx[1] === null) {
      openIndices[0] = { _id: wordObject._id, tagalog: wordObject.tagalog };
      changedClickedIdx = true;
    }

    // If first index is null, and second index is NOT null,
    // - If second index was clicked already, toggle
    // - If it wasn't, change first index, mark full answer
    if (
      clickedIdx[0] === null &&
      clickedIdx[1] !== null &&
      !changedClickedIdx
    ) {
      // Toggle
      if (clickedIdx[1]._id === wordObject._id) {
        openIndices[1] = null;
      } else {
        openIndices[0] = { _id: wordObject._id, tagalog: wordObject.tagalog };
        openIndices[2] = true;
      }
      changedClickedIdx = true;
    }

    // If first index is NOT null, and second index is null
    // - If first index was clicked already, toggle
    // - If it wasn't, change second index, mark full answer
    if (
      clickedIdx[0] !== null &&
      clickedIdx[1] === null &&
      !changedClickedIdx
    ) {
      // Toggle
      if (clickedIdx[0]._id === wordObject._id) {
        openIndices[0] = null;
      } else {
        openIndices[1] = { _id: wordObject._id, tagalog: wordObject.tagalog };
        openIndices[2] = true;
      }
      changedClickedIdx = true;
    }

    // If both indices are NOT null
    // - Check if either index is the matching _id to toggle
    //   - Then set index 2 to false
    if (
      clickedIdx[0] !== null &&
      clickedIdx[1] !== null &&
      !changedClickedIdx
    ) {
      // Toggle first index
      if (clickedIdx[0]._id === wordObject._id) {
        openIndices[0] = null;
        openIndices[2] = false;
      }

      // Toggle second index
      if (clickedIdx[1]._id === wordObject._id) {
        openIndices[1] = null;
        openIndices[2] = false;
      }
    }

    setClickedIdx(openIndices);
  };

  // If option was clicked return true
  // - Else return false
  const wasOptionClicked = (id) => {
    return clickedIdx.some((obj) => {
      if (obj !== null) return obj._id === id;
    });
  };

  // Handles changing to the next question
  const handleNextQuestion = () => {
    if (questionIdx + 1 === foundLessonQuestions.length) {
      setCompleted(true);
    } else {
      setQuestionIdx((prev) => (prev += 1));
      setIsAnswerCorrect(null);
      setClickedIdx(null);
    }
  };

  // This function forms the prompt
  const formQuestion = (question) => {
    switch (question.questionType) {
      case 'choose-word':
        return <ChooseWord question={question} clickedIdx={clickedIdx} />;

      case 'fill-blank':
        return <FillBlank question={question} clickedIdx={clickedIdx} />;

      case 'conjugate':
        return <Conjugate question={question} clickedIdx={clickedIdx} />;
    }
  };

  // This function forms the options of the question
  const formOptions = (question) => {
    let questionOptions = question.options;

    // Adds the conjugations to the options if question type is 'conjugate'
    if (question.questionType === 'conjugate') {
      // If clickedIdx is only null, change to an array of options
      // Index 2 is a boolean to show if available indices 0 and 1 are full
      if (clickedIdx === null) setClickedIdx([null, null, false]);
      let verb = question.options[0];

      // Combining the given options with the tenses of the verb fetched
      const tenses = [
        verb.tenses.present,
        verb.tenses.past,
        verb.tenses.future,
      ];
      questionOptions = [...tenses, ...question.options];

      // To understand the button
      // The button is disabled only if clickedIdx indices are full
      // If it was clicked, it will be yellow, remain red if it wasnt
      // Correct answers will be turned green once the check button is clicked
      // - Disable all incorrect answers
      return (
        <div className="options">
          {questionOptions.map((word, idx) => (
            <button
              disabled={
                clickedIdx !== null &&
                clickedIdx[0] !== null &&
                clickedIdx[1] !== null &&
                !wasOptionClicked(word._id)
              }
              className={`${
                clickedIdx !== null && wasOptionClicked(word._id)
                  ? 'clicked'
                  : 'not-clicked'
              } ${
                clickedIdx !== null &&
                clickedIdx[0] !== null &&
                clickedIdx[1] !== null &&
                isAnswerCorrect !== null
                  ? question.phrase.words.some((id) => id === word._id)
                    ? 'correct-color'
                    : 'disabled'
                  : ''
              }`}
              key={idx}
              onClick={() => {
                handleMultipleOptions(word);
              }}
            >
              {word.tagalog}
            </button>
          ))}
        </div>
      );
    }

    // All other question types
    return (
      <div className="options">
        {questionOptions.map(({ tagalog }, idx) => (
          <button
            disabled={isAnswerCorrect === null ? false : true}
            key={idx}
            onClick={() => setClickedIdx(idx)}
            className={`${clickedIdx === idx ? 'clicked' : 'not-clicked'} ${
              isAnswerCorrect !== null
                ? idx === question.answer
                  ? 'correct-color'
                  : 'disabled'
                : ''
            }`}
          >
            {tagalog}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="lesson-page">
      <div className="lesson-logo" onClick={() => navigate('/')}>
        <img
          alt="Tagalog Learning Logo"
          height="100"
          width="100"
          src={logoUrl}
        />
        <div>TagalogLearning.com</div>
      </div>

      {!completed && (
        <div className="lesson-container">
          <div className="lesson-left">
            <div className="lesson-title">{lessonTitle}</div>

            {formQuestion(foundLessonQuestions[questionIdx])}

            <LessonButton
              isAnswerCorrect={isAnswerCorrect}
              clickedIdx={clickedIdx}
              verifyAnswer={verifyAnswer}
              question={foundLessonQuestions[questionIdx]}
              handleNextQuestion={handleNextQuestion}
            />
          </div>
          <div className="lesson-right">
            {formOptions(foundLessonQuestions[questionIdx])}
          </div>
        </div>
      )}

      {completed && (
        <div className="lesson-container end">
          <div className="lesson-end">You Finished!</div>

          <div className="lesson-end-btns">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/start-learning')}>
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPage;
