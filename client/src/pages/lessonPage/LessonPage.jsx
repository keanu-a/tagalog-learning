import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// import { getLesson } from '../../data/api';
import logoUrl from '../../assets/logo.png';
import './LessonPage.scss';

import Loading from '../../components/loading/Loading';

// This component adds yellow to emphasis letter in words
const WordWithEmphasis = (props) => {
  const stress = props.word.stress;
  const letters = props.word.tagalog.split('');

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
  const [vocabIdx, setVocabIdx] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [seen, setSeen] = useState(false);
  const [foundLessonTitle, setFoundLessonTitle] = useState(null);
  const [foundLessonVocab, setFoundLessonVocab] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();
  let { lessonTitle } = useParams();

  let vocabAmount;

  // Gets lesson from the database
  useEffect(() => {
    async function fetchLesson() {
      const response = await fetch(
        `http://localhost:5000/api/v1/lesson/${lessonTitle}`
      );
      const foundData = await response.json();
      setFoundLessonTitle(foundData.lesson.title);

      // This is for adding the stress marks, since not easy to do with phrases
      foundData.lesson.words.forEach((element, idx) => {
        element.isWord = true;
        element.isLearned = false;
      });

      setFoundLessonVocab(
        foundData.lesson.words.concat(foundData.lesson.phrases)
      );

      vocabAmount = foundData.length;
    }

    fetchLesson();
  }, []);

  // Loading for if data isn't fetched yet
  if (!foundLessonTitle) {
    return <Loading />;
  }

  // After going through all the words, checks if you learned all of them
  // This will be used for drag and drop
  const checkAllLearned = () => {
    for (let i = 0; i < vocabAmount; i++) {
      if (!foundLessonVocab[i].isLearned) return false;
    }
    return true;
  };

  // Next question
  const handleNextQuestion = () => {
    // If went through all words
    setIsVisible(false);

    setTimeout(() => {
      if (vocabIdx + 1 === foundLessonVocab.length) {
        // Sets completed to true if all words are learned
        setSeen(true);
        // setCompleted(checkAllLearned());
        setCompleted(true);
      } else {
        setVocabIdx(vocabIdx + 1);
      }

      setIsVisible(true);
    }, 300);
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

      <div className="lesson-container">
        <div className="lesson-title">{foundLessonTitle}</div>

        {completed === true ? (
          <div className="lesson-completed">
            <div>You Finished!</div>
            <p>Tapos ka na!</p>
            <button className="lesson-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        ) : (
          <div className="lesson-in-progress">
            {isVisible && (
              <div className="lesson-question">
                <div className="lesson-word-tagalog">
                  {foundLessonVocab[vocabIdx].isWord ? (
                    <WordWithEmphasis word={foundLessonVocab[vocabIdx]} />
                  ) : (
                    foundLessonVocab[vocabIdx].tagalog
                  )}
                </div>
                <div className="lesson-word-english">
                  {foundLessonVocab[vocabIdx].english}
                </div>
              </div>
            )}

            <div className="lesson-btn-container">
              <button className="lesson-btn" onClick={handleNextQuestion}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
