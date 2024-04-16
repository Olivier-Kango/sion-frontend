import React from 'react';
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './FooterHome.scss';

const FooterHome = () => (
  <footer className="footer">
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
          placeholder="Your name"
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
          placeholder="Your email"
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
          placeholder="Your message..."
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
    <div className="social-icone" id="social">
      <nav className="flex-nav">
        <ul>
          <li className="social">
            <a
              href="https://wa.me/+243974894633"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp style={{ color: '#25D366', fontSize: '24px' }} />
              {/* <span>+243974894633</span> */}
            </a>
          </li>
          <li className="social">
            <a
              href="https://www.linkedin.com/company/kangooo"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: '#0077b5', fontSize: '24px' }} />
              {/* <span>LinkedIn</span> */}
            </a>
          </li>
          <li className="social">
            <a
              href="https://web.facebook.com/SionEcommerce"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook style={{ color: '#0866ff', fontSize: '24px' }} />
              <span>Facebook</span>
            </a>
          </li>
          <li className="social">
            <a
              href="mailto:olivierkango@gmail.com"
              id="m"
              target="_blank"
              rel="noreferrer"
            >
              <strong><AiOutlineMail style={{ color: '#db4437', fontSize: '24px' }} /></strong>
              <span>olivierkango@gmail.com</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default FooterHome;
