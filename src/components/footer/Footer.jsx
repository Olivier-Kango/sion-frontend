import React from 'react';

const Footer = () => {
  // Obtenir l'année actuelle
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      ©
      {' '}
      {currentYear}
      {' '}
      Olivier Kango
    </div>
  );
};

export default Footer;
