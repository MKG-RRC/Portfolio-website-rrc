import React from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            Hello, I'm <span>Mark</span>
          </h2>

          <p className="hero-subtitle">
            Full Stack Web Development Student • React • Node • Rails • Docker •
            CI/CD
          </p>

          <a href="#work" className="hero-button">
            View My Work
          </a>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="body-section">
        <h3>Welcome to my portfolio</h3>
        <p>
          This website showcases the projects, skills, tools, resources, and
          developer setup I’ve built throughout the Full Stack Web Development
          program.
        </p>
      </section>
    </>
  );
};
