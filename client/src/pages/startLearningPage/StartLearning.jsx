import React from 'react';
import { Outlet } from 'react-router-dom';

import Lesson from '../../components/lesson/Lesson';
import Navbar from '../../components/navbar/Navbar';

import './StartLearning.scss';

const lessonOrder = [
  'Introduce Yourself',
  'Greetings',
  "Honorifics - Using 'Po'",
  "Using 'Ang'",
  "Using 'Si'",
  'Creating Basic Sentences',
];

const StartLearning = () => {
  return (
    <div>
      <Navbar />

      <div className="learning-header">Start Learning The Basics</div>

      <div className="learning-lessons">
        <div>
          {lessonOrder.map((title, idx) => (
            <Lesson key={idx} lessonIndex={idx} title={title} />
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StartLearning;
