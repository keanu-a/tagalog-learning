import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../../components/loading/Loading';
import PageHeader from '../../components/pageHeader/PageHeader';

import './SectionPage.scss';

const SectionPage = () => {
  const [sectionData, setSectionData] = useState(null);
  const { sectionTitle } = useParams();

  const navigate = useNavigate();

  // Capitalize a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    async function fetchSection() {
      const response = await fetch(
        `http://localhost:5000/api/v1/section/${sectionTitle}`
      );
      const foundData = await response.json();

      setSectionData(foundData.section);
    }

    fetchSection();
  }, []);

  if (!sectionData) return <Loading />;

  return (
    <div className="page-container">
      <div className="page-content">
        <PageHeader text={capitalize(sectionData.title)} />

        <div className="section-lessons">
          {sectionData.lessons.map(({ title }, idx) => {
            return (
              <div key={idx} onClick={() => navigate(`${title}`)}>
                {capitalize(title)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
