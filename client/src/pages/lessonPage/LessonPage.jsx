import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import styles from './LessonPage.module.css';

import Logo from '../../components/logo/Logo';
import Loading from '../../components/loading/Loading';

import ChooseWord from '../../components/lessonComponents/chooseWord/ChooseWord';
import FillBlank from './fillBlank/FillBlank';
import Conjugate from './conjugate/Conjugate';

import LessonStart from '../../components/lessonComponents/lessonStart/LessonStart';
import NextButton from '../../components/lessonComponents/nextButton/NextButton';
import Options from '../../components/lessonComponents/options/Options';

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  questionIdx: 0,
  selectedOption: null,
  checkedAnswer: false,
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

    // This case is for when a user clicks an option
    case 'clicked':
      // action.payload should be the idx of the option
      return { ...state, selectedOption: action.payload };

    // This case is for when a user clicks the check button
    case 'check':
      return { ...state, checkedAnswer: true };

    // This case is for when a user clicks the next button
    case 'next':
      return {
        ...state,
        questionIdx: state.questionIdx + 1,
        selectedOption: null,
        checkedAnswer: false,
      };

    case 'finish':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unknown action type');
  }
};

const LessonPage = () => {
  const [
    { questions, status, questionIdx, selectedOption, checkedAnswer },
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
          <progress
            className={styles.progress}
            max={amountOfQuestions}
            value={questionIdx}
          />
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

          <Options question={questions[questionIdx]} dispatch={dispatch} />

          <NextButton
            dispatch={dispatch}
            questionIdx={questionIdx}
            amountOfQuestions={amountOfQuestions}
            selectedOption={selectedOption}
            checkedAnswer={checkedAnswer}
          />
        </div>
      )}

      {status === 'finished' && <div>Finished</div>}
    </div>
  );
};

export default LessonPage;
