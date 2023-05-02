import React from 'react';
import { useParams } from 'react-router-dom';

const LessonInfo = () => {
  const { lessonId } = useParams();

  return (
    <div>
      <div>Lesson {lessonId}</div>
    </div>
  );
};

export default LessonInfo;
