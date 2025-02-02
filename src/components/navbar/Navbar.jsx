import React, { useRef, useState } from 'react';
import VariableProximity from '../../blocks/TextAnimations/VariableProximity/VariableProximity';
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-links ${isOpen ? 'active' : ''}`} ref={containerRef}>
          <VariableProximity
            label="Home"
            className="navbar-icon"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          <VariableProximity
            label="About"
            className="navbar-icon"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          <VariableProximity
            label="Projects"
            className="navbar-icon"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          <VariableProximity
            label="Contact"
            className="navbar-icon"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

