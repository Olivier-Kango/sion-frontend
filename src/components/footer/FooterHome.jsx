import React from 'react';
import './FooterHome.scss';

const FooterHome = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <br />
      <h2>Contact Us!</h2>
      <br />
      {/* CONTACT FORM */}
      <form
        noValidate
        action="https://formspree.io/f/xrgdbpve"
        method="post"
        id="form"
      >
        <div className="field" id="field-name">
          <input
            type="text"
            name="Names"
            className="input-field"
            id="name"
            placeholder="Olivier Kango"
            maxLength="30"
          />
          <small id="errorName" />
        </div>
        <div className="field" id="field-email">
          <input
            type="email"
            name="email"
            id="email"
            className="input-field"
            placeholder="olivierkango@gmail.com"
          />
          <small id="errorEmail" />
        </div>
        <div className="field" id="field-text">
          <textarea
            name="Post"
            className="input-field"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your text here !!!"
            maxLength="401"
          />
          <small id="errorMsg" />
        </div>
        <div className="field" id="field-overal">
          <small id="overralError" />
        </div>
        <br />
        <div className="field">
          <button type="submit" className="see-project" id="see-footer">
            Get in touch
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      {' '}
      {currentYear}
      {' '}
    </footer>
  );
};

export default FooterHome;
