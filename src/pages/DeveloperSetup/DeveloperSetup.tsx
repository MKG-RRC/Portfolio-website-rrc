import React from "react";

import "./Developer.css";
import { Typography } from "../../components/UI/Typography/Typography";

export const DeveloperSetup = () => {
  return (
    <section className="dev-section" id="developer">
      <Typography variant="h2">Developer Setup</Typography>

      <div className="dev-block">
        <Typography variant="h3">VSCode Setup</Typography>
        <ul>
          <li>Theme: One Dark Pro</li>
          <li>
            Extensions: ESLint, Prettier, GitLens, Docker, Bracket Pair
            Colorizer
          </li>
          <li>Format On Save: Enabled</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Terminal Setup</Typography>
        <ul>
          <li>Windows Terminal</li>
          <li>PowerShell or WSL (Ubuntu)</li>
          <li>Optionally Oh-My-Posh prompt theme</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Preferred Editor Font</Typography>
        <Typography variant="p">Inter (UI font)</Typography>
      </div>
    </section>
  );
};
