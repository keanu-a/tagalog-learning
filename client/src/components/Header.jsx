import React from 'react';

// Using environment variables with import.meta.env.____

const Header = () => {
  return <div>{import.meta.env.VITE_API_URL}</div>;
};

export default Header;
