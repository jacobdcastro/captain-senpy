import React from 'react';
import '../../styles/layout/hamburger.scss';

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`hamburger hamburger--spin-r ${isOpen && 'is-active'}`}
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      aria-label="open mobile navigation menu"
      data-testid="hamburger"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </div>
  );
};

export default Hamburger;
