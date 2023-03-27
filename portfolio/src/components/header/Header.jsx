import React from "react";
import "./header.css";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`containerHeader ${isVisible ? "header-visible" : "header-hidden"}`}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
