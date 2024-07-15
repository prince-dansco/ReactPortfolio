import React from "react";
import "../cssPages/HeroStyle.css";
import IntroImage from "../asset/lighting.avif";
import { Link } from "react-router-dom";
import HeroTypeWriter from "./heroTypeWriter";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImage} alt="" />
      </div>
      <div className="content">
        <p>HI I AM A FRONTEND-DEVELOPER</p>
        <h1>Princewill A Okon</h1>
        <h3 className="flex">
          And I Am
          <span>
            <HeroTypeWriter
              words={[
                "a developer...",
                "a frontend web dev...",
                "a freelancer...",
              ]}
              speed={100}
            />
          </span>
        </h3>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
