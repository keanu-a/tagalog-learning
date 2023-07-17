import React, { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import logoUrl from '../../assets/logo.png';
import styles from './LessonPage.module.css';
import './LessonPage.scss';

import Logo from '../../components/logo/Logo';

import Loading from '../../components/loading/Loading';
import ChooseWord from './chooseWord/ChooseWord';
import FillBlank from './fillBlank/FillBlank';
import Conjugate from './conjugate/Conjugate';
import LessonButton from './lessonButton/LessonButton';
import LessonStart from '../../components/lessonStart/LessonStart';

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

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  questionIdx: 0,
  clickedOption: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload.questions,
        status: 'ready',
      };

    case 'dataFailed':
      return { ...state, status: 'error' };

    case 'start':
      return { ...state, status: 'active' };

    case 'clicked':
      // action.payload should be the idx of the option
      return { ...state, clickedOption: action.payload };

    case 'next':
      return { ...state, questionIdx: questionIdx + 1, clickedOption: null };

    case 'finish':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unknown action type');
  }
};

const LessonPage = () => {
  const [{ questions, status, questionIdx, clickedOption }, dispatch] =
    useReducer(reducer, initialState);
  const amountOfQuestions = questions.length;

  const [completed, setCompleted] = useState(false);

  const [foundLessonQuestions, setFoundLessonQuestions] = useState([]);

  const [clickedIdx, setClickedIdx] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  let { lessonTitle } = useParams();

  // Fetches lesson data from MongoDB only once on mount
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/lesson/${lessonTitle}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data.lesson }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

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
    <div className={styles.lessonPage}>
      {status === 'loading' && <Loading />}
      {status === 'error' && <p>Error</p>}

      {/* ONLY SHOW LOGO IF NOT ERROR OR LOADING */}
      {status !== 'loading' && status !== 'error' && <Logo lesson={true} />}

      {status === 'ready' && (
        <LessonStart title={lessonTitle} dispatch={dispatch} />
      )}

      {/* ONLY SHOW PROGRES BAR IF ACTIVE OR FINISHED */}
      {(status === 'active' || status === 'finished') && (
        <div>
          <progress
            className={styles.progress}
            max={amountOfQuestions}
            value={questionIdx + 1}
          />
          <h3>Lesson: {lessonTitle}</h3>
        </div>
      )}

      {status === 'active' &&
        questions[questionIdx].questionType === 'choose-word' && (
          <ChooseWord question={questions[questionIdx]} />
        )}
      {status === 'active' &&
        questions[questionIdx].questionType === 'fill-blank' && <FillBlank />}
      {status === 'active' &&
        questions[questionIdx].questionType === 'conjugate' && <Conjugate />}

      {status === 'finished' && <div>Finished</div>}
    </div>
  );
};

export default LessonPage;
