import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import styles from './LessonPage.module.css';

import Logo from '../../components/logo/Logo';
import Loading from '../../components/loading/Loading';

import ChooseWord from '../../components/lessonComponents/chooseWord/ChooseWord';
import FillBlank from './fillBlank/FillBlank';
import Conjugate from './conjugate/Conjugate';

import LessonStart from '../../components/lessonComponents/lessonStart/LessonStart';
import CheckButton from '../../components/lessonComponents/CheckButton';
import NextButton from '../../components/lessonComponents/NextButton';
import Options from '../../components/lessonComponents/options/Options';

const initialState = {
  questions: [],
  correctAnswer: null,

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  questionIdx: 0,
  selectedOption: null,
  checkedAnswer: false,
  answeredCorrectly: null,
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

    // This sets status to active and sets first correct answer
    case 'start':
      return {
        ...state,
        status: 'active',
        correctAnswer: state.questions[state.questionIdx].answer,
      };

    // This case is for when a user clicks an option
    case 'clicked':
      // action.payload should be the idx of the option
      return { ...state, selectedOption: action.payload };

    // This case is for when a user clicks the check button
    case 'check':
      let correct;

      // This handles checking if the answer is correct
      if (state.selectedOption == state.correctAnswer) correct = true;
      else correct = false;

      return { ...state, checkedAnswer: true, answeredCorrectly: correct };

    // This case is for when a user clicks the next button
    case 'next':
      const nextIdx = state.questionIdx + 1;

      return {
        ...state,
        questionIdx: nextIdx,
        correctAnswer: state.questions[nextIdx].answer,
        selectedOption: null,
        checkedAnswer: false,
        answeredCorrectly: null,
      };

    case 'finish':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unknown action type');
  }
};

const LessonPage = () => {
  const [
    {
      questions,
      status,
      questionIdx,
      selectedOption,
      correctAnswer,
      checkedAnswer,
      answeredCorrectly,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const amountOfQuestions = questions.length;

  let { lessonTitle } = useParams();

  // Fetches lesson data from MongoDB only once on mount
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/lesson/${lessonTitle}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data.lesson }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className={styles.lessonPage}>
      {status === 'loading' && <Loading />}

      {/* ONLY SHOW LOGO IF NOT LOADING */}
      {status !== 'loading' && <Logo lesson={true} />}

      {status === 'error' && <p>Error</p>}

      {status === 'ready' && (
        <LessonStart title={lessonTitle} dispatch={dispatch} />
      )}

      {/* ONLY SHOW PROGRES BAR IF ACTIVE OR FINISHED */}
      {(status === 'active' || status === 'finished') && (
        <div className={styles.header}>
          <progress max={amountOfQuestions} value={questionIdx} />
        </div>
      )}

      {status === 'active' && (
        <div className={styles.content}>
          {questions[questionIdx].questionType === 'choose-word' && (
            <ChooseWord
              question={questions[questionIdx]}
              dispatch={dispatch}
              amountOfQuestions={amountOfQuestions}
              questionIdx={questionIdx}
            />
          )}

          {questions[questionIdx].questionType === 'fill-blank' && (
            <FillBlank />
          )}

          {questions[questionIdx].questionType === 'conjugate' && <Conjugate />}

          <Options
            question={questions[questionIdx]}
            dispatch={dispatch}
            checkedAnswer={checkedAnswer}
            answeredCorrectly={answeredCorrectly}
            correctAnswer={correctAnswer}
            selectedOption={selectedOption}
          />

          {!checkedAnswer ? (
            <CheckButton dispatch={dispatch} selectedOption={selectedOption} />
          ) : (
            <NextButton
              dispatch={dispatch}
              questionIdx={questionIdx}
              amountOfQuestions={amountOfQuestions}
              answeredCorrectly={answeredCorrectly}
            />
          )}
        </div>
      )}

      {status === 'finished' && <div>Finished</div>}
    </div>
  );
};

export default LessonPage;
