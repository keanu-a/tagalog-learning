import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import styles from './Carousel.module.css';

const ARROW_ICON_SIZE = 50;

const CarouselCard = ({ lessonNumber, lesson, onStartSection }) => (
  <div className={styles.card}>
    <h4>Section {lessonNumber}</h4>
    <h3 className={styles.title}>
      {lesson.title} in{' '}
      <span className={styles.location}>{lesson.location}</span>
    </h3>

    <p>{lesson.info}</p>

    <button onClick={() => onStartSection(lesson.title)}>Start</button>
  </div>
);

const Carousel = ({
  sections,
  sectionIdx,
  onSectionChange,
  handleStartSection,
}) => {
  const length = sections.length;

  const nextCard = () => {
    const nextIdx = sectionIdx + 1;
    onSectionChange(nextIdx);
  };
  const prevCard = () => {
    const prevIdx = sectionIdx - 1;
    onSectionChange(prevIdx);
  };

  return (
    <div className={styles.container}>
      {sectionIdx > 0 && (
        <MdArrowCircleLeft
          size={ARROW_ICON_SIZE}
          onClick={prevCard}
          className={`${styles.left} ${styles.arrow}`}
        />
      )}
      {sections.map((lesson, idx) => {
        return (
          <div key={idx}>
            {idx === sectionIdx && (
              <CarouselCard
                key={idx}
                lesson={lesson}
                lessonNumber={idx + 1}
                onStartSection={handleStartSection}
              />
            )}
          </div>
        );
      })}
      {sectionIdx < length - 1 && (
        <MdArrowCircleRight
          size={ARROW_ICON_SIZE}
          onClick={nextCard}
          className={`${styles.right} ${styles.arrow}`}
        />
      )}
    </div>
  );
};

export default Carousel;
