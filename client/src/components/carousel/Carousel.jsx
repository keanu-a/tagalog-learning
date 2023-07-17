import React, { useState } from 'react';

import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

import './Carousel.scss';

const ARROW_ICON_SIZE = 50;

const CarouselCard = ({ lessonNumber, title }) => (
  <div className="carousel-card">
    <div className="carousel-card-lesson">Section {lessonNumber}</div>
    <div className="carousel-card-title">{title}</div>
    <div className="carousel-card-status">NOT COMPLETED</div>
  </div>
);

const Carousel = ({ sectionDetails, cardIdx, onCardChange }) => {
  const length = sectionDetails.length;

  if (sectionDetails.length <= 0) {
    return null;
  }

  const nextCard = () => {
    const nextIdx = cardIdx + 1;
    onCardChange(nextIdx);
  };
  const prevCard = () => {
    const prevIdx = cardIdx - 1;
    onCardChange(prevIdx);
  };

  return (
    <div className="carousel-container">
      {cardIdx > 0 && (
        <MdArrowCircleLeft
          size={ARROW_ICON_SIZE}
          onClick={prevCard}
          className="left arrow"
        />
      )}
      {sectionDetails.map((lesson, idx) => {
        return (
          <div key={idx}>
            {idx === cardIdx && (
              <CarouselCard
                key={idx}
                title={lesson.title}
                lessonNumber={idx + 1}
              />
            )}
          </div>
        );
      })}
      {cardIdx < length - 1 && (
        <MdArrowCircleRight
          size={ARROW_ICON_SIZE}
          onClick={nextCard}
          className="right arrow"
        />
      )}
    </div>
  );
};

export default Carousel;
