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
      Sion E-Commerce
    </div>
  );
};

export default Footer;
