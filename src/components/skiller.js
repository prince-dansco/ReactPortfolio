import React from "react";
import SkillCard from "./skillCard";

const Skiller = () => {
  return (
    <>
    <h2 className='skill'>My Skills and Work Experience</h2>
      <div className="skill-container">
        <div className="section-header">
          <p>As a frontend web developer, I have extensive experience with:</p>
          <p>
            - HTML5: Creating semantic and accessible web pages using HTML5
            standards.
            <br />
            - CSS3: Styling websites with CSS3, including animations, flexbox,
            and grid layouts.
            <br />
            - Bootstrap: Designing responsive layouts and components using
            Bootstrap framework.
            <br />
            - React: Building interactive user interfaces and single-page
            applications (SPAs) with React.js.
            <br />
            - Material-UI: Implementing Material Design components and theming
            in React applications.
            <br />
            - Tailwind CSS: Utilizing utility-first CSS framework for rapid UI
            development and customization.
            <br />
            - Responsive Design: Ensuring websites look great and function well
            across various devices and screen sizes.
            <br />
            - Version Control: Managing codebase efficiently with Git, GitHub,
            or GitLab.
            <br />
            - API Integration: Integrating third-party APIs with React
            applications.
            <br />
            - Performance Optimization: Optimizing frontend performance through
            code optimization and caching strategies.
            <br />
          </p>
        </div>
        <div className="skill-card-container">
          <SkillCard />
        </div>
      </div>
    </>
  );
};

export default Skiller;
