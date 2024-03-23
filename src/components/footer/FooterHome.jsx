import React from 'react';

const FooterHome = () => {
  // Obtenir l'année actuelle
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-home">
      ©
      {' '}
      {currentYear}
      {' '}
      Olivier Kango
    </div>
  );
};

export default FooterHome;
