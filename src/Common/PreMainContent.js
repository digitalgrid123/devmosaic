import React, { useState, useEffect } from "react";
import icon from "../Assets/Images/Rectangle.svg";

function PreMainContent({ showMainContent }) {
  const [slideOut, setSlideOut] = useState(false);
  const [distortText, setDistortText] = useState(false);
  const [text, setText] = useState("");
  const [words, setWords] = useState([
    "frontend Developer",
    "UI/UX designer",
    "React Developer",
  ]);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (text === currentWord) {
      setTimeout(() => {
        setShowCursor(false);
        setTimeout(() => {
          setShowCursor(true);
          const nextIndex = (wordIndex + 1) % words.length;
          setWordIndex(nextIndex);
          setText("");
        }, 3000);
      }, 2000);
    } else {
      const typingInterval = setInterval(() => {
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
        } else if (text.length === currentWord.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setText(currentWord.substring(0, text.length - 1));
          }, 1500);
        }
      }, 100);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [text, wordIndex, words]);

  const handleClick = () => {
    setDistortText(true);

    setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => {
        showMainContent();
      }, 400);
    }, 1500);
  };

  return (
    <>
      <div className={`pre-main-content${slideOut ? " slide-out" : ""}`}>
        <h1
          className={`pre_heading bold${distortText ? " text-distortion" : ""}`}
        >
          I'm a{" "}
          <span className="typing-effect">
            {text}
            <span className={`blinker${showCursor ? " show" : ""}`}>|</span>
          </span>
        </h1>
        <button className="show-main-button" onClick={handleClick}>
          Tap to View
        </button>
      </div>
    </>
  );
}

export default PreMainContent;
