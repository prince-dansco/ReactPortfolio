// import React, { useEffect, useState } from "react";

// const HeroTypeWriter = ({ words, speed }) => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const currentWord = words[currentWordIndex];

//   useEffect(() => {
//     let charIndex = 0;

//     const typingInterval = setInterval(() => {
//       if (charIndex <= currentWord.length) {
//         setCurrentText(currentWord.slice(0, charIndex));
//         charIndex++;
//       } else {
//         clearInterval(typingInterval);

//         setTimeout(() => {
//           setCurrentWordIndex((prevIndex) =>
//             prevIndex === words.length - 1 ? 0 : prevIndex + 1
//           );
//         }, 1000);
//       }
//     }, speed);

//     return () => {
//       clearInterval(typingInterval);
//     };
//   }, [words, speed, currentWord]);

//   return <div>{currentText}</div>;
// };

// export default HeroTypeWriter;
import React, { useEffect, useState } from "react";

const HeroTypeWriter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setFadeClass("fade-out");
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) =>
              prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
            setFadeClass("fade-in");
          }, 800); 
        }, 1000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [words, speed, currentWord]);

  return <span className={fadeClass}>{currentText}</span>;
};

export default HeroTypeWriter;
