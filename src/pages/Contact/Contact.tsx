import React from "react";
import "./Contact.css";

import { ContactForm } from "../../components/UI/ContactForm/ContactForm";
import { Typography } from "../../components/UI/Typography/Typography";
import { useRevealOnScroll } from "../../useRevealOnScroll";

export const Contact = () => {
  useRevealOnScroll();

  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-wrapper">
        {/* LEFT: Contact Form */}
        <div className="contact-left">
          <ContactForm />
        </div>

        {/* RIGHT: Social Profiles */}
        <div className="contact-right">
          <Typography variant="h2">Connect With Me</Typography>

          <div className="social-links">
            <a
              className="social-card"
              href="https://www.linkedin.com/in/mark-kenneth-garcia-6a1a68381/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.png" alt="LinkedIn" />
              <span className="connect-text">LinkedIn Profile</span>
            </a>

            <a
              className="social-card"
              href="https://github.com/MKG-RRC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.png" alt="GitHub" />
              <span className="connect-text">GitHub Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
