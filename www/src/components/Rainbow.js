import React from 'react';
import styled from 'styled-components';
import '../styles/rainbow.scss';
import { useWindowWidth } from 'window-dimensions-hooks';

const Wrapper = styled.div`
  transform: scale(${props => props.scale});
`;

const Rainbow = () => {
  let width = useWindowWidth();

  const setScale = w => {
    if (w) {
      const scale = w * 0.0014 + -0.0004;
      // console.log(scale);
      if (scale > 2.08) {
        return 2.08;
      } else if (scale < 0.42) {
        return 0.42;
      } else {
        return scale;
      }
    } else {
      return 1.0;
    }
  };

  return (
    <Wrapper scale={setScale(width)} className="rainbow">
      <div className="arc arc-red" />
      <div className="arc arc-orange" />
      <div className="arc arc-yellow" />
      <div className="arc arc-green" />
      <div className="arc arc-blue" />
      <div className="arc arc-purple" />
      <div className="arc arc-transparent" />
    </Wrapper>
  );
};

export default Rainbow;
