import React from "react";

import "./Resources.css";
import { Card } from "../../components/UI/Card/Card";
import { Typography } from "../../components/UI/Typography/Typography";

export const Resources = () => {
  return (
    <section className="resources-section" id="resources">
      <Typography variant="h2">Resources</Typography>

      <div className="resources-grid">
        <Card
          title="How to Build a React Portfolio Website From Scratch"
          description="Step-by-step guide from FreeCodeCamp on building a complete React portfolio site."
          image="/icons/react-portfolio-guide.png"
          link="https://buttercms.com/blog/build-a-portfolio-website-with-react/"
          buttonLabel="View Resource →"
        />

        <Card
          title="React Tutorial by W3Schools"
          description="React Introduction"
          image="/icons/w3s.png"
          link="https://www.w3schools.com/REACT/DEFAULT.ASP"
          buttonLabel="View Resource →"
        />

        <Card
          title="React Documentation"
          description="Official React documentation covering components, hooks, routing, and best practices."
          image="/icons/react.png"
          link="https://react.dev"
          buttonLabel="View Resource →"
        />

        <Card
          title="Storybook Documentation"
          description="Learn how to build isolated UI components using Storybook’s official documentation."
          image="/icons/storybook.png"
          link="https://storybook.js.org/docs"
          buttonLabel="View Resource →"
        />

        <Card
          title="Docker Documentation"
          description="Docker basics, CLI commands, containerization concepts, and deployment best practices."
          image="/icons/docker.png"
          link="https://docs.docker.com/"
          buttonLabel="View Resource →"
        />

        <Card
          title="GitHub Actions Guide"
          description="A complete guide to setting up CI/CD workflows using GitHub Actions."
          image="/icons/github-actions.png"
          link="https://docs.github.com/en/actions"
          buttonLabel="View Resource →"
        />
      </div>
    </section>
  );
};
