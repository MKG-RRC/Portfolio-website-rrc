import React from "react";

import "./Skills.css";
import { Typography } from "../../components/UI/Typography/Typography";

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Typography variant="h2">Skills</Typography>

      <Typography variant="p">
        Throughout the Full Stack Web Development program, I have gained
        experience across frontend, backend, and DevOps tooling. Below is a
        breakdown of the technologies, languages, frameworks, and tools that I
        work with regularly, along with a short overview of my specific
        strengths in each area.
      </Typography>

      <div className="skills-grid">
        {/* ---------------------- LANGUAGES / FRAMEWORKS ---------------------- */}
        <div className="skills-category">
          <Typography variant="h3">Languages & Frameworks</Typography>
          <Typography variant="p">
            Strong foundation in modern JavaScript ecosystems, full-stack web
            development, typed programming patterns, and application
            architecture.
          </Typography>

          <ul>
            <li>
              <strong>JavaScript (ES6+)</strong> – Functional patterns, async
              programming, browser APIs.
            </li>
            <li>
              <strong>TypeScript</strong> – Strong typing, interfaces, generics,
              type-safe component design.
            </li>
            <li>
              <strong>React</strong> – Component-based UI development,
              hooks-based architecture, state management.
            </li>
            <li>
              <strong>HTML5 / CSS3</strong> – Responsive design, accessibility,
              semantic markup, custom component styling.
            </li>
            <li>
              <strong>Node.js</strong> – Server-side development, Express apps,
              modular API design.
            </li>
            <li>
              <strong>Express</strong> – REST API routing, middleware,
              controllers, server logic.
            </li>
            <li>
              <strong>Ruby on Rails</strong> – MVC architecture, models,
              controllers, views, ActiveRecord, CRUD.
            </li>
          </ul>
        </div>

        {/* ----------------------------- TOOLS ----------------------------- */}
        <div className="skills-category">
          <Typography variant="h3">Developer Tools</Typography>
          <Typography variant="p">
            Tooling and workflows used across real development environments,
            ensuring clean code, automation, testing, and deployment readiness.
          </Typography>

          <ul>
            <li>
              <strong>Git & GitHub</strong> – Branching workflows, pull
              requests, version control, GitHub collaboration.
            </li>
            <li>
              <strong>Docker</strong> – Containerization, Dockerfiles, image
              builds, local development environments.
            </li>
            <li>
              <strong>GitHub Actions (CI/CD)</strong> – Automated testing, build
              pipelines, linting checks, deploy workflows.
            </li>
            <li>
              <strong>ESLint & Prettier</strong> – Code linting, formatting
              automation, style consistency across apps.
            </li>
            <li>
              <strong>VS Code</strong> – Full development environment with
              custom theme, extensions, and editor configuration.
            </li>
            <li>
              <strong>Storybook</strong> – Component-driven UI development,
              documentation, and visual testing for reusable UI systems.
            </li>
            <li>
              <strong>Postman</strong> – API debugging, REST endpoint testing,
              request simulations.
            </li>
          </ul>
        </div>

        {/* ----------------------------- SPECIALTIES ----------------------------- */}
        <div className="skills-category">
          <Typography variant="h3">Development Strengths</Typography>
          <Typography variant="p">
            Areas where I have applied my learning across multiple projects with
            hands-on experience.
          </Typography>

          <ul>
            <li>
              <strong>Component Libraries</strong> – Built reusable UI systems
              using React, Storybook, and TypeScript.
            </li>
            <li>
              <strong>Responsive Design</strong> – Mobile-first layouts, grid
              systems, optimized typography.
            </li>
            <li>
              <strong>Automation & CI/CD</strong> – Build pipelines, automated
              linting, testing, and Docker deployment.
            </li>
            <li>
              <strong>App Architecture</strong> – Structuring scalable front-end
              + back-end codebases.
            </li>
            <li>
              <strong>Debugging & Troubleshooting</strong> – Identifying and
              resolving issues with build systems, NPM, configs, and logic.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
