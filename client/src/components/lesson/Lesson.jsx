import React from 'react';

import { useNavigate } from 'react-router-dom';

import './Lesson.scss';

const Lesson = ({ title, lessonIndex }) => {
  const navigate = useNavigate();

  return (
    <div className="lesson-card" onClick={() => navigate(`${lessonIndex}`)}>
      <div className="lesson-number">Lesson {lessonIndex}:</div>
      <div className="lesson-title">{title}</div>
    </div>
  );
};

export default Lesson;
