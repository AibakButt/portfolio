import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tabImg from '../../../../Assets/Images/Calendy/tab.png';
import mobileImg from '../../../../Assets/Images/Calendy/mobile.png';
import tab2Img from '../../../../Assets/Images/Calendy/tab2.png';


const Tab2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-120vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const Mobile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 7}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-135vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const Tab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-95vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class VoistrapImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Tab src={tabImg} scroll={scrollPercent} alt="tab" />
        <Mobile src={mobileImg} scroll={scrollPercent} alt="mobile" />
        <Tab2 src={tab2Img} scroll={scrollPercent} alt="tab2" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
