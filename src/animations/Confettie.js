import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};
/**
 * @description Presents a nice confetti animation on the page
 * @note This Animation must be only enabled for the month of January as the new execom members are taking over
 * @note Permission must be taken from Chair and Vice Chair to enable this animation
 * ! @Bug this fires instantly on page load, but it should only fire when the page is scrolled to the execom section
 */
export default class SchoolPride extends React.Component {
  constructor(props) {
    super(props);
    this.isAnimationEnabled = false;
    this.animationInstance = null;
    this.nextTickAnimation = this.nextTickAnimation.bind(this);
  }

  makeShot = (angle, originX) => {
    this.animationInstance &&
      this.animationInstance({
        particleCount: 3,
        angle,
        spread: 55,
        origin: { x: originX },
        colors: ['#bb0000', '#ffffff'],
        speed: 1,
      });
  };

  nextTickAnimation = () => {
    this.makeShot(60, 0);
    this.makeShot(120, 1);
    if (this.isAnimationEnabled) requestAnimationFrame(this.nextTickAnimation);
  };

  startAnimation = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
      this.nextTickAnimation();
    }
  };

  pauseAnimation = () => {
    this.isAnimationEnabled = false;
  };

  stopAnimation = () => {
    this.isAnimationEnabled = false;
    this.animationInstance && this.animationInstance.reset();
  };

  handlerClickStart = () => {
    this.startAnimation();
  };

  handlerClickPause = () => {
    this.pauseAnimation();
  };

  handlerClickStop = () => {
    this.stopAnimation();
  };

  getInstance = instance => {
    this.animationInstance = instance;
  };

  componentWillUnmount() {
    this.isAnimationEnabled = false;
  }

  render() {
    setTimeout(() => {
      this.handlerClickStart();
    }, 100);

    setTimeout(() => {
      this.handlerClickPause();
    }, 3000);

    return (
      <>
        <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles} />
      </>
    );
  }
}
