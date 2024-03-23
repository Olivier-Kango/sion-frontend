import React from 'react';

const FooterHome = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-home">
      ©
      {' '}
      {currentYear}
      {' '}
      Footer
    </div>
  );
};

export default FooterHome;
