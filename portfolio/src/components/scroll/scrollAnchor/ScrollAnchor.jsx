import React from "react";
import "./scrollAnchor.css";
import { useState } from "react";
import { useEffect } from "react";

function ScrollAnchor() {
  const [showAnchor, setShowAnchor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 450) {
      setShowAnchor(true);
    } else {
      setShowAnchor(false);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {showAnchor && (
        <button onClick={handleClick} className="btnAnchor">
          <img src="images/up-arrow.svg" className="anchor" alt="Ancrage" />
        </button>
      )}
    </div>
  );
}

export default ScrollAnchor;
