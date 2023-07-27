import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from '../../layouts/navbar/Navbar';
import PageHeader from '../../layouts/pageHeader/PageHeader';

import Carousel from '../../components/carousel/Carousel';
import Map from '../../components/map/Map';

import styles from './LearnPage.module.css';

import sections from '../../data/sections';

const LearnPage = () => {
  const [startedSection, setStartedSection] = useState(false);
  const [sectionIdx, setSectionIdx] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionChange = (idx) => {
    setSectionIdx(idx);
  };

  const handleStartSection = (sectionTitle) => {
    setStartedSection(true);
    navigate(`sections/${sectionTitle}`);
  };

  // This accounts for when a user presses back to LearnPage from SectionPage
  useEffect(() => {
    if (location.pathname === '/learn') setStartedSection(false);
  }, [location]);

  return (
    <>
      <Navbar />

      {startedSection && <Outlet />}

      {!startedSection && (
        <main>
          <PageHeader text="Start Learning" />

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
      )}
    </>
  );
};

export default LearnPage;
