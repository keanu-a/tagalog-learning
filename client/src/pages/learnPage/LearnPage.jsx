import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/pageHeader/PageHeader';
import Carousel from '../../components/carousel/Carousel';
import Map from '../../components/map/Map';

import styles from './LearnPage.module.css';
import './LearnPage.scss';

const sectionDetails = [
  {
    title: 'Beginner',
    location: 'Batangas',
    info: 'You will travel to the city of Batangas, a popular city in the Philippines near Manila. Here you will learn basic words and phrases all Tagalog speakers know!',
  },
  {
    title: 'Questions',
    location: 'Quezon',
    info: 'Next you will travel to the city of Quezon',
  },
];

const LearnPage = () => {
  const [sectionIdx, setSectionIdx] = useState(0);

  const navigate = useNavigate();

  const handleLessonChange = (idx) => {
    setSectionIdx(idx);
  };

  return (
    <>
      <Navbar />
      <PageHeader text="Lets Start Learning" />

      <main className={`main ${styles.learn}`}>
        <section className="section-picker">
          <Carousel
            sectionDetails={sectionDetails}
            cardIdx={sectionIdx}
            onCardChange={handleLessonChange}
          />

          <div className="section-details">
            <div className="section-details-title">
              {sectionDetails[sectionIdx].title} in{' '}
              {sectionDetails[sectionIdx].location}
            </div>

            <div className="section-details-info">
              {sectionDetails[sectionIdx].info}
            </div>

            <button
              className="section-details-start"
              onClick={() =>
                navigate(
                  `/sections/${sectionDetails[sectionIdx].title.toLowerCase()}`
                )
              }
            >
              START
            </button>
          </div>
        </section>

        <section className="section-map">
          <Map />
        </section>
      </main>
    </>
  );
};

export default LearnPage;
