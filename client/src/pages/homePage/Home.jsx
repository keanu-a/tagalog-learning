import React, { useState } from 'react';

import {
  IcBaselineBed,
  IcBaselineCrueltyFree,
  IcBaselineFamilyRestroom,
  IcBaselineFastfood,
  IcBaselineFavorite,
  IcBaselineKitchen,
  IcBaselineFaceRetouchingNatural,
  IcBaselineThunderstorm,
  IcBaselineVideogameAsset,
  IcBaselineWavingHand,
  IcBaselineWork,
  IcSharpAirplanemodeActive,
} from '../../assets/icons/Icons';

import './Home.scss';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';

const homeCards = [
  {
    title: 'Greetings',
    tagalog: '',
    icon: <IcBaselineWavingHand height="70%" width="70%" />,
  },
  {
    title: 'Body',
    tagalog: 'Katawan',
    icon: <IcBaselineFaceRetouchingNatural height="70%" width="70%" />,
    id: 1,
  },
  {
    title: 'Weather',
    tagalog: 'Panahon',
    icon: <IcBaselineThunderstorm height="70%" width="70%" />,
    id: 2,
  },
  {
    title: 'Feelings',
    tagalog: 'Damdamin',
    icon: <IcBaselineFavorite height="70%" width="70%" />,
    id: 3,
  },
  {
    title: 'Family',
    tagalog: 'Pamilya',
    icon: <IcBaselineFamilyRestroom height="70%" width="70%" />,
    id: 4,
  },
  {
    title: 'Food',
    tagalog: 'Pagkain',
    icon: <IcBaselineFastfood height="70%" width="70%" />,
    id: 5,
  },
  {
    title: 'Bedroom',
    tagalog: 'Kwarto',
    icon: <IcBaselineBed height="70%" width="70%" />,
    id: 6,
  },
  {
    title: 'Kitchen',
    tagalog: 'Kusina',
    icon: <IcBaselineKitchen height="70%" width="70%" />,
    id: 7,
  },
  {
    title: 'Travel',
    tagalog: '',
    icon: <IcSharpAirplanemodeActive height="70%" width="70%" />,
    id: 8,
  },
  {
    title: 'Work',
    tagalog: 'Trabaho',
    icon: <IcBaselineWork height="70%" width="70%" />,
    id: 9,
  },
  {
    title: 'Activities',
    tagalog: 'Gawain',
    icon: <IcBaselineVideogameAsset height="70%" width="70%" />,
    id: 10,
  },
  {
    title: 'Nature',
    tagalog: 'Kalikasan',
    icon: <IcBaselineCrueltyFree height="70%" width="70%" />,
    id: 11,
  },
];

const Home = () => {
  const [headerInput, setheaderInput] = useState('');

  const handleOnChange = (e) => {
    setheaderInput((prevText) => e.target.value);
  };

  return (
    <div>
      <Navbar />

      <header className="home-header">
        <div className="home-title">Learn Tagalog Easily</div>

        <div className="search-container">
          <input
            type="text"
            value={headerInput}
            onChange={(e) => handleOnChange(e)}
            placeholder="Search dictionary"
            className="home-search"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="home-section">
        <div className="home-section-header">Variety of Lessons</div>

        <div className="home-card-set">
          {homeCards.map(({ title, tagalog, icon }) => (
            <Card key={title} title={title} tagalog={tagalog}>
              {icon}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
