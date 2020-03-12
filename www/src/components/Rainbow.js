import React from 'react';
import styled from 'styled-components';
import '../styles/rainbow/clouds.scss';
import '../styles/rainbow/arcs.scss';
import { useWindowWidth } from 'window-dimensions-hooks';

const Wrapper = styled.div`
  transform: scale(${props => props.scale});
  position: absolute;
  margin: 200px auto;

  .cloud-wrapper {
    margin-top: 100px;

    .cloud-box {
      position: absolute;
      top: 65px;
      &:nth-child(1) {
        left: -100px;
      }
      &:nth-child(2) {
        left: -375px;
      }
    }
  }
`;

const setScale = w => {
  if (w) {
    const scale = w * 0.00124 + -0.0004;
    // console.log(scale);
    if (scale > 2.08) {
      return 2.08;
    } else if (scale < 0.42) {
      return 0.42; // set minimum
    } else {
      return scale;
    }
  } else {
    return 1.0;
  }
};

const Arcs = () => (
  <div className="rainbow">
    <div className="arc arc-red" />
    <div className="arc arc-orange" />
    <div className="arc arc-yellow" />
    <div className="arc arc-green" />
    <div className="arc arc-blue" />
    <div className="arc arc-purple" />
    <div className="arc arc-transparent" />
  </div>
);

const Cloud = () => (
  <div className="cloud-box">
    <div className="cloud" />
    <div className="cloud" />
    <div className="cloud" />
    <div className="cloud" />
    <div className="cloud" />
    <div className="cloud" />
  </div>
);

const Rainbow = () => {
  let width = useWindowWidth();
  return (
    <Wrapper scale={setScale(width)}>
      <Arcs />
      <div className="cloud-wrapper">
        <Cloud />
        <Cloud />
      </div>
    </Wrapper>
  );
};

export default Rainbow;
