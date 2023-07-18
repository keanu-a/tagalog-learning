import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import styles from './LessonPage.module.css';

import Logo from '../../components/logo/Logo';
import Loading from '../../components/loading/Loading';
import ChooseWord from './chooseWord/ChooseWord';
import FillBlank from './fillBlank/FillBlank';
import Conjugate from './conjugate/Conjugate';
import LessonStart from '../../components/lessonComponents/lessonStart/LessonStart';
import NextButton from '../../components/lessonComponents/nextButton/NextButton';

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  questionIdx: 0,
  selectedOption: null,
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
      return { ...state, selectedOption: action.payload };

    case 'next':
      return {
        ...state,
        questionIdx: state.questionIdx + 1,
        selectedOption: null,
      };

    case 'finish':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unknown action type');
  }
};

const LessonPage = () => {
  const [{ questions, status, questionIdx, selectedOption }, dispatch] =
    useReducer(reducer, initialState);
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
      {status === 'error' && <p>Error</p>}

      {/* ONLY SHOW LOGO IF NOT ERROR OR LOADING */}
      {status !== 'loading' && status !== 'error' && <Logo lesson={true} />}

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

      {status === 'active' &&
        questions[questionIdx].questionType === 'choose-word' && (
          <ChooseWord
            question={questions[questionIdx]}
            dispatch={dispatch}
            amountOfQuestions={amountOfQuestions}
            questionIdx={questionIdx}
          />
        )}
      {status === 'active' &&
        questions[questionIdx].questionType === 'fill-blank' && <FillBlank />}
      {status === 'active' &&
        questions[questionIdx].questionType === 'conjugate' && <Conjugate />}

      {/* ONLY SHOW NEXT BUTTON IF ACTIVE */}
      {status === 'active' && (
        <NextButton
          dispatch={dispatch}
          questionIdx={questionIdx}
          amountOfQuestions={amountOfQuestions}
          selectedOption={selectedOption}
        />
      )}

      {status === 'finished' && <div>Finished</div>}
    </div>
  );
};

export default LessonPage;
