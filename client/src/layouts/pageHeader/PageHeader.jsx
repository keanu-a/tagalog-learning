import React from 'react';

import styles from './PageHeader.module.css';

const PageHeader = ({ text }) => {
  return <h2 className={styles.header}>{text}</h2>;
};

export default PageHeader;
