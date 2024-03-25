import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaTwitter,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
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
      <div className="social-icone" id="social">
        <nav className="flex-nav">
          <ul>
            <li className="social">
              <a
                href="https://github.com/Olivier-Kango"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub style={{ color: '#4078c0' }} />
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.linkedin.com/in/olivier-kango/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin style={{ color: '#0077b5' }} />
              </a>
            </li>
            <li className="social">
              <a
                href="https://angel.co/u/kango-olivier"
                target="_blank"
                rel="noreferrer"
              >
                <FaAngellist style={{ color: '#1c408c' }} />
              </a>
            </li>
            <li className="social">
              <a
                href="https://twitter.com/olivierkango1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter style={{ color: '#1da1f2' }} />
              </a>
            </li>
            <li className="social">
              <a
                href="mailto:olivierkango@gmail.com"
                id="m"
                target="_blank"
                rel="noreferrer"
              >
                <strong><AiOutlineMail style={{ color: '#db4437' }} /></strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p id="bottom">olivierkango@gmail.com</p>
      {' '}
      {currentYear}
      {' '}
    </footer>
  );
};

export default FooterHome;
