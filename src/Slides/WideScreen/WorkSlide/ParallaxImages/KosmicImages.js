import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import tabImg from "../../../../Assets/Images/Kosmic/tab.png";
import mobileImg from "../../../../Assets/Images/Kosmic/mobile.png";
import taskImg from "../../../../Assets/Images/Kosmic/mobile2.png";

const TabImg = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 5}%) scale(0.7)`,
  }),
})`
  transition: transform 0.2s ease-out;
  top: 75vh;
  left: 2vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(0.8px);
`;

const MobileImg = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 2}%) scale(0.6)`,
  }),
})`
  transition: transform 0.2s ease-out;
  top: 55vh;
  right: 5vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(1.2px);
`;

const TaskImg = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 2}%) scale(0.6)`,
  }),
})`
  transition: transform 0.2s ease-out;
  top: 45vh;
  right: 20vw;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
  filter: blur(1.2px);
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
        <TabImg src={tabImg} scroll={scrollPercent} alt="tabImg" />
        <MobileImg src={mobileImg} scroll={scrollPercent} alt="mobileImg" />
        <TaskImg src={taskImg} scroll={scrollPercent} alt="taskImg" />
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
