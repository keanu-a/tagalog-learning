import React from 'react';

import Navbar from '../../layouts/navbar/Navbar';
import PageHeader from '../../layouts/pageHeader/PageHeader';

import './Conjugate.scss';

const ConjugatePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader text="Lets Conjugate" />

        <div className="verb-section">
          <div className="verb-header">Ma- and Mag- Verbs</div>

          <div className="verb-example">
            <div>Infinitive</div>
            <div>Past</div>
            <div>Present</div>
            <div>Future</div>
            <div>Matulog - To Sleep</div>
            <div>Natulog</div>
            <div>Natutulog</div>
            <div>Matutulog</div>
          </div>

          <button className="btn-conjugate">Learn</button>
        </div>
        <div className="verb-section">
          <div className="verb-header">-Um- Verbs</div>

          <button className="btn-conjugate">Learn</button>
        </div>
        <div className="verb-section">
          <div className="verb-header">-In Verbs</div>

          <button className="btn-conjugate">Learn</button>
        </div>
        <div className="verb-section">
          <div className="verb-header">I- Verbs</div>

          <button className="btn-conjugate">Learn</button>
        </div>
      </main>
    </>
  );
};

export default ConjugatePage;
