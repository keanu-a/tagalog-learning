import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageHeader from '../../layouts/pageHeader/PageHeader';

import Loading from '../../components/loading/Loading';

import styles from './SectionPage.module.css';

const SectionPage = () => {
  const navigate = useNavigate();

  const [sectionData, setSectionData] = useState(null);
  const { sectionTitle } = useParams();

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

  return (
    <>
      {!sectionData && <Loading />}

      {sectionData && (
        <main className={styles.main}>
          <PageHeader text={sectionData.title} />

          <ul className={styles.lessons}>
            {sectionData.lessons.map(({ title }, idx) => {
              return (
                <button
                  className={styles.lesson}
                  key={idx}
                  onClick={() => navigate(`/lesson/${title}`)}
                >
                  {title}
                </button>
              );
            })}
          </ul>
        </main>
      )}
    </>
  );
};

export default SectionPage;
