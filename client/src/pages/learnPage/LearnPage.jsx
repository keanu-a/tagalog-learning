import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import batangas from '../../assets/map-batangas.png';

import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/pageHeader/PageHeader';
import Carousel from '../../components/carousel/Carousel';
import Map from '../../components/map/Map';

import styles from './LearnPage.module.css';

const sections = [
  {
    title: 'beginner',
    location: 'Batangas',
    info: 'You will travel to the city of Batangas, a popular city in the Philippines near Manila. Here you will learn basic words and phrases all Tagalog speakers know!',
    picture: batangas,
  },
  {
    title: 'questions',
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
    navigate(`/sections/${sectionTitle}`);
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
            handleStartSection={handleStartSection}
          />

          <Map picture={sections[sectionIdx].picture} />
        </section>
      </main>
    </>
  );
};

export default LearnPage;
