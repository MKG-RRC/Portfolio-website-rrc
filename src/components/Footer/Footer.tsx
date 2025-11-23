import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">MKG Portfolio</h3>

        <p className="footer-description">
          Built with React, a custom UI library, Storybook, ESLint, Prettier,
          Husky, Docker, and GitHub Actions (CI/CD).
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#resources">Resources</a>
          <a href="#developer">Setup</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {year} Mark Garcia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
