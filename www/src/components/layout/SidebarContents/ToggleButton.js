import React from 'react';

const ToggleButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      id="mobileContentMenuToggle"
      className={`hamburger hamburger--squeeze${isOpen ? ' is-active' : ''}`}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default ToggleButton;
