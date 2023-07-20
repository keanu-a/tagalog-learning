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

const Carousel = ({ sections, sectionIdx, onSectionChange }) => {
  const length = sections.length;

  if (sections.length <= 0) {
    return null;
  }

  const nextCard = () => {
    const nextIdx = sectionIdx + 1;
    onSectionChange(nextIdx);
  };
  const prevCard = () => {
    const prevIdx = sectionIdx - 1;
    onSectionChange(prevIdx);
  };

  return (
    <div className="carousel-container">
      {sectionIdx > 0 && (
        <MdArrowCircleLeft
          size={ARROW_ICON_SIZE}
          onClick={prevCard}
          className="left arrow"
        />
      )}
      {sections.map((lesson, idx) => {
        return (
          <div key={idx}>
            {idx === sectionIdx && (
              <CarouselCard
                key={idx}
                title={lesson.title}
                lessonNumber={idx + 1}
              />
            )}
          </div>
        );
      })}
      {sectionIdx < length - 1 && (
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
