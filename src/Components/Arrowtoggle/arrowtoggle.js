import React, { useState, useEffect } from "react";
import "./arrowtoggle.css";

function ArrowToggle() {
  const [isScrollDown, setIsScrollDown] = useState(true); // Track scroll direction

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrollDown(true); // At top, show down arrow
      } else if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setIsScrollDown(false); // At bottom, show up arrow
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const handleArrowClick = () => {
    if (isScrollDown) {
      // Scroll down smoothly
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll up smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsScrollDown(!isScrollDown); // Toggle arrow direction
  };

  return (
    <div className="arrow-container" onClick={handleArrowClick}>
      {isScrollDown ? (
        <i className="bi bi-arrow-down arrow-icon"></i> // Bootstrap down arrow
      ) : (
        <i className="bi bi-arrow-up arrow-icon"></i> // Bootstrap up arrow
      )}
    </div>
  );
}

export default ArrowToggle;
