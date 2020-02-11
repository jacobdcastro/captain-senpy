import React from 'react';
import styled from 'styled-components';
import '../styles/rainbow.scss';
import { useWindowWidth } from 'window-dimensions-hooks';

const Wrapper = styled.div`
  ${'' /* transform: scale(${props => props.width}); */}
`;

const Rainbow = () => {
  let width = useWindowWidth();
  console.log(width);

  const setScale = w => {
    if (typeof window !== 'undefined') {
      return;
    } else {
      return w;
    }
  };

  return (
    <Wrapper width={useWindowWidth()} className="rainbow">
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
