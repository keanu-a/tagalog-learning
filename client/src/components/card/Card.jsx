import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.scss';

const Card = (props) => {
  const navigate = useNavigate();
  let formattedTitle = props.title.replace(/\s+/g, '-').toLowerCase();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`lesson/${formattedTitle}`)}
    >
      <div className="card-icon">{props.children}</div>
      <div className="card-title">{props.title}</div>
      <div className="card-title-tagalog">{props.tagalog}</div>
    </div>
  );
};

export default Card;
