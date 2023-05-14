import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import UnitCard from '../../components/sectionCard/SectionCard';

import './StartLearning.scss';

const unitOrder = [
  'Beginner',
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
          {unitOrder.map((title, idx) => (
            <UnitCard key={idx} lessonIndex={idx + 1} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
