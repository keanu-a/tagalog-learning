import React from 'react';

import {
  MdHandshake,
  MdFace,
  MdCloud,
  MdHeartBroken,
  MdOutlineFamilyRestroom,
  MdFastfood,
  MdBed,
  MdSoupKitchen,
  MdOutlineAirplanemodeActive,
  MdAssignment,
  MdVideogameAsset,
  MdFlare,
} from 'react-icons/md';

import styles from './Home.module.css';

import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import HowSection from '../../components/howSection/HowSection';

const ICON_SIZE = 80;

const homeCards = [
  {
    title: 'Greetings',
    tagalog: '',
    icon: <MdHandshake size={ICON_SIZE} />,
  },
  {
    title: 'Body',
    tagalog: 'Katawan',
    icon: <MdFace size={ICON_SIZE} />,
    id: 1,
  },
  {
    title: 'Weather',
    tagalog: 'Panahon',
    icon: <MdCloud size={ICON_SIZE} />,
    id: 2,
  },
  {
    title: 'Feelings',
    tagalog: 'Damdamin',
    icon: <MdHeartBroken size={ICON_SIZE} />,
    id: 3,
  },
  {
    title: 'Family',
    tagalog: 'Pamilya',
    icon: <MdOutlineFamilyRestroom size={ICON_SIZE} />,
    id: 4,
  },
  {
    title: 'Food',
    tagalog: 'Pagkain',
    icon: <MdFastfood size={ICON_SIZE} />,
    id: 5,
  },
  {
    title: 'Bedroom',
    tagalog: 'Kwarto',
    icon: <MdBed size={ICON_SIZE} />,
    id: 6,
  },
  {
    title: 'Kitchen',
    tagalog: 'Kusina',
    icon: <MdSoupKitchen size={ICON_SIZE} />,
    id: 7,
  },
  {
    title: 'Travel',
    tagalog: '',
    icon: <MdOutlineAirplanemodeActive size={ICON_SIZE} />,
    id: 8,
  },
  {
    title: 'Work',
    tagalog: 'Trabaho',
    icon: <MdAssignment size={ICON_SIZE} />,
    id: 9,
  },
  {
    title: 'Activities',
    tagalog: 'Gawain',
    icon: <MdVideogameAsset size={ICON_SIZE} />,
    id: 10,
  },
  {
    title: 'Nature',
    tagalog: 'Kalikasan',
    icon: <MdFlare size={ICON_SIZE} />,
    id: 11,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <h1>Learn Tagalog Easily</h1>
        </section>

        <section className="main">
          <h3>How it works</h3>

          <HowSection />
        </section>

        <section className="main">
          <h3>Variety of Lessons</h3>

          <div className={styles.lessons}>
            {homeCards.map(({ title, tagalog, icon }, index) => (
              <Card key={index} title={title} tagalog={tagalog}>
                {icon}
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
