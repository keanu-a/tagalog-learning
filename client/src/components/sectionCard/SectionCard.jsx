import React from 'react';
import { useNavigate } from 'react-router-dom';

import './SectionCard.scss';

const SectionCard = ({ title, lessonIndex }) => {
  const navigate = useNavigate();
  let formattedTitle = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <div
      className="lesson-card"
      onClick={() => navigate(`sections/${formattedTitle}`)}
    >
      <div className="lesson-number">Section {lessonIndex}:</div>
      <div className="lesson-title">{title}</div>
    </div>
  );
};

export default SectionCard;
