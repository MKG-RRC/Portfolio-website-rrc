import React from "react";

import "./Developer.css";
import { Typography } from "../../components/UI/Typography/Typography";
import { useRevealOnScroll } from "../../useRevealOnScroll";

export const DeveloperSetup = () => {
  useRevealOnScroll();

  return (
    <section className="dev-section" id="developer">
      <Typography variant="h2">Developer Setup</Typography>

      <div className="dev-block">
        <Typography variant="h3">VSCode Setup</Typography>
        <ul>
          <li>Theme: One Dark Pro</li>
          <li>
            Extensions: ESLint, Prettier, GitLens, Docker, Bracket Pair
            Colorizer, Auto Rename Tag, Path Intellisense, Thunder Client
          </li>
          <li>Format On Save: Enabled</li>
          <li>Auto Save: onFocusChange</li>
          <li>Tab Size: 2 spaces</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Terminal Setup</Typography>
        <ul>
          <li>Windows Terminal with custom color scheme</li>
          <li>PowerShell 7 or WSL2 (Ubuntu 22.04 LTS)</li>
          <li>Oh-My-Posh with custom prompt theme</li>
          <li>Git Bash for Git operations</li>
          <li>Zsh with plugins (for WSL)</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Docker Setup</Typography>
        <ul>
          <li>Docker Desktop for Windows (WSL2 backend)</li>
          <li>Docker Compose for multi-container applications</li>
          <li>Common Images: Node.js Alpine, PostgreSQL, Redis, Nginx</li>
          <li>Volume mounting for live code updates</li>
          <li>Custom networks for container communication</li>
          <li>Docker Hub for image management</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Git Configuration</Typography>
        <ul>
          <li>Git 2.40+ with credential manager</li>
          <li>SSH key authentication for GitHub</li>
          <li>Global .gitignore for system files</li>
          <li>Conventional commit messages</li>
          <li>Branch naming: feature/, bugfix/, hotfix/</li>
          <li>Git aliases for common commands</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Node.js & Package Management</Typography>
        <ul>
          <li>Node.js LTS version (via nvm for version management)</li>
          <li>npm 10+ as primary package manager</li>
          <li>pnpm for faster installs (alternative)</li>
          <li>Global packages: nodemon, typescript, eslint, prettier</li>
          <li>Package-lock.json committed to repository</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Browser Development Tools</Typography>
        <ul>
          <li>Chrome DevTools for debugging and performance</li>
          <li>Extensions: React Developer Tools, Redux DevTools</li>
          <li>Lighthouse for performance auditing</li>
          <li>Network throttling for testing slow connections</li>
          <li>Responsive design mode for mobile testing</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">API Development & Testing</Typography>
        <ul>
          <li>Postman for API testing and documentation</li>
          <li>Thunder Client (VSCode extension) for quick requests</li>
          <li>Insomnia as alternative REST client</li>
          <li>JSON Formatter extension for readable responses</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Database Tools</Typography>
        <ul>
          <li>PostgreSQL with pgAdmin 4</li>
          <li>MySQL Workbench for MySQL databases</li>
          <li>MongoDB Compass for NoSQL databases</li>
          <li>DBeaver as universal database tool</li>
          <li>Redis Insight for Redis management</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Code Quality & CI/CD</Typography>
        <ul>
          <li>ESLint with Airbnb style guide</li>
          <li>Prettier for consistent formatting</li>
          <li>Husky for Git hooks (pre-commit, pre-push)</li>
          <li>GitHub Actions for automated testing and deployment</li>
          <li>SonarQube for code quality analysis</li>
          <li>Jest and React Testing Library for testing</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Productivity Tools</Typography>
        <ul>
          <li>Notion for project documentation and notes</li>
          <li>Figma for design collaboration</li>
          <li>Slack for team communication</li>
          <li>Trello or Jira for task management</li>
          <li>Screen capturing: ShareX or Snagit</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">System Specifications</Typography>
        <ul>
          <li>OS: Windows 11 Pro</li>
          <li>RAM: 32GB DDR4</li>
          <li>Storage: 512GB NVMe SSD</li>
          <li>Multiple monitors for enhanced productivity</li>
        </ul>
      </div>

      <div className="dev-block">
        <Typography variant="h3">Preferred Fonts</Typography>
        <Typography variant="p">
          Code: Fira Code (with ligatures enabled)
        </Typography>
        <Typography variant="p">UI: Inter, System UI</Typography>
      </div>
    </section>
  );
};
