import React, { useState } from "react";

const SkillCard = () => {
  // State variables to track proficiency levels
  const [htmlProficiency, setHtmlProficiency] = useState(50);
  const [cssProficiency, setCssProficiency] = useState(40);
  const [bootstrapProficiency, setBootstrapProficiency] = useState(30);
  const [reactProficiency, setReactProficiency] = useState(50);
  const [muiProficiency, setMuiProficiency] = useState(40);
  const [tailwindProficiency, setTailwindProficiency] = useState(20);

  return (
    <div className="skill-container">
      <div className="section-header">
        <h2>My Skills and Work Experience</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>HTML</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={htmlProficiency}
              onChange={(e) => setHtmlProficiency(parseInt(e.target.value))}
            />
            <p>
              Proficiency: <strong>{htmlProficiency}%</strong>{" "}
            </p>
          </div>
          <div className="skill-category">
            <h3>CSS</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={cssProficiency}
              onChange={(e) => setCssProficiency(parseInt(e.target.value))}
            />
            <p>
              Proficiency: <strong>{cssProficiency}%</strong>
            </p>
          </div>
          <div className="skill-category">
            <h3>Bootstrap</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={bootstrapProficiency}
              onChange={(e) =>
                setBootstrapProficiency(parseInt(e.target.value))
              }
            />
            <p>
              Proficiency: <strong>{bootstrapProficiency}%</strong>{" "}
            </p>
          </div>
          <div className="skill-category">
            <h3>React</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={reactProficiency}
              onChange={(e) => setReactProficiency(parseInt(e.target.value))}
            />
            <p>Proficiency: <strong>{reactProficiency}%</strong></p>
          </div>
          <div className="skill-category">
            <h3>Material-UI</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={muiProficiency}
              onChange={(e) => setMuiProficiency(parseInt(e.target.value))}
            />
            <p>
              Proficiency: <strong>{muiProficiency}%</strong>
            </p>
          </div>
          <div className="skill-category">
            <h3>Tailwind CSS</h3>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={tailwindProficiency}
              onChange={(e) => setTailwindProficiency(parseInt(e.target.value))}
            />
            <p>
              Proficiency: <strong>{tailwindProficiency}%</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
