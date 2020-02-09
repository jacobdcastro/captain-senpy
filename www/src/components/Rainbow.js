import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/rainbow.scss';

const Wrapper = styled.div`
  ${'' /* transform: scale(0.3); */}
`;

const Rainbow = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // only runs if in browser
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    }
  }, []);

  const setScale = w => {
    if (typeof window !== 'undefined') {
      return;
    } else {
      return w;
    }
  };

  return (
    <Wrapper width={setScale(width)} className="rainbow">
      <div class="arc arc-red"></div>
      <div class="arc arc-orange"></div>
      <div class="arc arc-yellow"></div>
      <div class="arc arc-green"></div>
      <div class="arc arc-blue"></div>
      <div class="arc arc-purple"></div>
      <div class="arc arc-transparent"></div>
    </Wrapper>
  );
};

export default Rainbow;
