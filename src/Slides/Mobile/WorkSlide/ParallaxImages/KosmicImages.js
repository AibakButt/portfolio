import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import mobileImg from "../../../../Assets/Images/Kosmic/mobile.png";
import tabImg from "../../../../Assets/Images/Kosmic/tab.png";
import taskImg from "../../../../Assets/Images/Kosmic/mobile2.png";

const FastRetailingPhoneUQ = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 15}%) scale(0.7)`,
  }),
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -170vh;
  transform-origin: left center;
  left: 2vw;
  /* border: 1px dashed red; */
  height: 80vh;
`;

const FastRetailingPhonePLST = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 3.5}%) scale(0.5)`,
  }),
})`
  transition: transform 0.2s ease-out;
  bottom: -110vh;
  left: 10vw;
  transform-origin: left center;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.8px);
`;

const TaskImg = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 3.5}%) scale(0.5)`,
  }),
})`
  transition: transform 0.2s ease-out;
  bottom: -110vh;
  left: 30vw;
  transform-origin: left center;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.8px);
`;

class FastRetailingImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <FastRetailingPhonePLST
          src={mobileImg}
          scroll={scrollPercent}
          alt="fastRetailingPLST"
        />
        <FastRetailingPhoneUQ
          src={tabImg}
          scroll={scrollPercent}
          alt="fastRetailingGU2"
        />
        <TaskImg src={taskImg} scroll={scrollPercent} alt="fastRetailingGU3" />
      </React.Fragment>
    );
  }
}

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;
