import React from "react";

import { Card } from "../../components/UI/Card/Card";
import "./Work.css";

export const Work: React.FC = () => {
  return (
    <section className="work-section" id="work">
      <h2 className="work-title">My Work</h2>

      <div className="work-grid">
        <Card
          title="UI Garden – Component Library"
          description="A custom UI design system built with React, Storybook, and TypeScript."
          image="https://via.placeholder.com/600x400"
          tech={["React", "TypeScript", "Storybook"]}
          link="#"
        />

        <Card
          title="Portfolio Website"
          description="A modern React portfolio styled with Inter and a custom UI library."
          image="https://via.placeholder.com/600x400"
          tech={["React", "CSS", "Docker"]}
          link="#"
        />

        <Card
          title="CI/CD Pipeline"
          description="GitHub Actions pipeline with ESLint, Prettier, testing, and Docker builds."
          image="https://via.placeholder.com/600x400"
          tech={["GitHub Actions", "CI/CD", "Linting"]}
          link="#"
        />

        <Card
          title="UniCatalog – University Management System"
          description="A full Rails application for managing universities, departments, programs, and instructors, featuring ActiveRecord relationships, search, pagination, Mapbox maps, and a seeded dataset of 200+ records."
          image="/icons/ruby-on-rails-1.png"
          tech={["Ruby on Rails", "SQLite3", "Bootstrap", "Mapbox", "HTML5"]}
          link="https://github.com/MKG-RRC/Intro-to-Rails-Project-for-Agile-Full-Stack-.git"
        />
      </div>
    </section>
  );
};
