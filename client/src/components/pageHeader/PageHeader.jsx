import React from 'react';

import './PageHeader.scss';

const PageHeader = ({ text }) => {
  return <header className="page-header">{text}</header>;
};

export default PageHeader;
