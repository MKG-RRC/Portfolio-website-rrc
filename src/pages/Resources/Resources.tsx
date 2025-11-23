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
          title="GitHub"
          description="All my repositories including class projects, assignments, and UI library."
          image="/icons/github.png"
          link="https://github.com/yourusername"
        />

        <Card
          title="UI Garden Storybook"
          description="My component library with Buttons, Typography, Cards, UI patterns, and more."
          image="/icons/storybook.png"
          link="http://localhost:6006/"
        />

        <Card
          title="Docker Cheat Sheet"
          description="A handy reference for common Docker CLI commands."
          image="/icons/docker.png"
          link="https://docs.docker.com/"
        />
      </div>
    </section>
  );
};
