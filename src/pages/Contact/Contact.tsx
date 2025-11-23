import React from "react";
import "./Contact.css";

import { ContactForm } from "../../components/UI/ContactForm/ContactForm";
import { Typography } from "../../components/UI/Typography/Typography";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* LEFT: Contact Form */}
        <div className="contact-form-section">
          <ContactForm />
        </div>

        {/* RIGHT: Social Profiles */}
        <div className="contact-social-section">
          <Typography variant="h2">Connect With Me</Typography>

          <Typography variant="p">
            You can also reach me through my professional profiles:
          </Typography>

          <div className="social-links">
            <a
              className="social-card"
              href="https://www.linkedin.com/in/mark-kenneth-garcia-6a1a68381/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              className="social-card"
              href="https://github.com/MKG-RRC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.png" alt="GitHub" />
              <span>GitHub Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
