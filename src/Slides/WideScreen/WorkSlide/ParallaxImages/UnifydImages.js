import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tabImg from '../../../../Assets/Images/Unifyd/tab.png';
import mobileImg from '../../../../Assets/Images/Unifyd/mobile.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:0vw;
/* border: 1px dashed red; */
height: 80vh; 
filter: blur(0.6px);
`;

class EyepImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Tablet src={tabImg} scroll={scrollPercent} alt="tab" />
        <Iphone src={mobileImg} scroll={scrollPercent} alt="mobile" />
      </React.Fragment>
    );
  }
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;
