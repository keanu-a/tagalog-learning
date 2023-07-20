import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/pageHeader/PageHeader';
import Carousel from '../../components/carousel/Carousel';
import Map from '../../components/map/Map';

import styles from './LearnPage.module.css';

const sections = [
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

  const handleSectionChange = (idx) => {
    setSectionIdx(idx);
  };

  const handleStartSection = (sectionTitle) => {
    navigate(`/sections/${sectionTitle.toLowerCase()}`);
  };

  return (
    <>
      <Navbar />

      <main>
        <PageHeader text="Lets Start Learning" />

        <section className={styles.content}>
          <Carousel
            sections={sections}
            sectionIdx={sectionIdx}
            onSectionChange={handleSectionChange}
          />

          {/* <button
            onClick={() =>
              navigate(`/sections/${sections[sectionIdx].title.toLowerCase()}`)
            }
          >
            START
          </button> */}

          <Map />
        </section>
      </main>
    </>
  );
};

export default LearnPage;
