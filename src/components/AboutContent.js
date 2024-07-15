// import React from "react";
// import "../cssPages/AboutContentStyles.css";
// import image1 from "../asset/lighting.avif";
// import image2 from "../asset/lighting.avif";
// import { Link } from "react-router-dom";
// import {AnimationPreience, motion} from "framer-motion"

// const AboutContent = () => {
//   return (
//     <div className="about">
//       <div className="left">
//         <h1>Who Am I?</h1>
//         <p>
//           I'm a React front-end developer. I create responsive and secure
//           websites for my clients.
//         </p>
//         <Link to="/contact">
//           <button className="btn">Contact</button>
//         </Link>
//       </div>

//       <div className="right">
//         <div className="img-container">
//           <div className="img-stack top">
//             <img src={image1} alt="Lighting" className="img" />
//           </div>
//           <div className="img-stack bottom">
//             <motion.img
//             initial=({y:0})
//             animate=({y:[-10.10,-10]})
//             transition=((
//               repeat:Infinity,
//               duration:2,
//               ease: "linear"
//             ))
//            src={image1}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContent;
import React from "react";
import "../cssPages/AboutContentStyles.css";
import image1 from "../asset/lighting.avif";
import image2 from "../asset/lighting.avif";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a React front-end developer. I create responsive and secure
          websites for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <motion.img
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              src={image1}
              alt="Lighting"
              className="img"
            />
            {/* <img src={image1} alt="Lighting" className="img" /> */}
          </div>
          <div className="img-stack bottom">
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              src={image2}
              alt="Lighting"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
