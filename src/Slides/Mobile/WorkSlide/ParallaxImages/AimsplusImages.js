import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tabImg from '../../../../Assets/Images/Aimsplus/tab.png';
import mobileImg from '../../../../Assets/Images/Aimsplus/mobile.png';

const Mobile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const Tab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class AimsplusImages extends Component {
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
        <Tab src={tabImg} scroll={scrollPercent} alt="teslaTab" />
        <Mobile src={mobileImg} scroll={scrollPercent} alt="teslaMobile" />
      </React.Fragment>
    );
  }
}

AimsplusImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default AimsplusImages;
