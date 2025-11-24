import React from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.css";
import { Button } from "../../components/UI/Button/Button";

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

          <Button href="#work" variant="primary">
            View My Work
          </Button>
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
