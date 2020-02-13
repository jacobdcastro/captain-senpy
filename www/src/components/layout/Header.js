import React from 'react';
import Hamburger from './Hamburger';

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile-header">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
