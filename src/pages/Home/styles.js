import styled, { css } from 'styled-components';
import bg_mobile from '../../assets/home/background-home-mobile.jpg';
import tablet_bg_mobile from '../../assets/home/background-home-tablet.jpg';
import desktop_bg_mobile from '../../assets/home/background-home-desktop.jpg';
import pxToRem from '../../helper/tipographySwitch';

export const StyletInfo = styled.div`
  max-width: 450px;
  margin: 48px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      max-width: 100%;
      height: calc(100vh - 175px);
      display: grid;
      grid-template-columns: 2fr 1fr;
      /* justify-items: center; */
      text-align: left;

      & div:nth-child(1) {
        max-width: 450px;
      }

      & p:nth-child(1) {
        font-size: ${pxToRem(28)};
        line-height: ${pxToRem(33.6)};
        letter-spacing: ${pxToRem(4.72)};
      }
    `}
`;

const StyledHome = styled.section`
  padding: 110px 20px 20px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  // bg for mobile
  background-image: ${({ isMobile }) => (isMobile ? `url(${bg_mobile})` : '')};
  // bg for tablet
  background-image: ${({ isTablet }) =>
    isTablet ? `url(${tablet_bg_mobile})` : ''};
  // bg for dektop
  background-image: ${({ isDesktop }) =>
    isDesktop ? `url(${desktop_bg_mobile})` : ''};

  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-family: 'Bellefair', sans-serif;
    font-size: ${pxToRem(80)};
    line-height: ${pxToRem(100)};
  }

  p:last-of-type {
    margin-bottom: 60px;
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(25)};
  }

  ${({ isTablet }) =>
    isTablet &&
    css`
      padding-top: 150px;

      h1 {
        font-size: ${pxToRem(150)};
        line-height: ${pxToRem(150)};
      }

      p:nth-child(1) {
        font-size: ${pxToRem(20)};
        line-height: ${pxToRem(25)};
        letter-spacing: ${pxToRem(3.38)};
        margin-bottom: 24px;
      }

      p:last-of-type {
        margin-bottom: 150px;
      }
    `}

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      h1 {
        line-height: ${pxToRem(171.9)};
        font-size: ${pxToRem(150)};
        margin: 24px 0;
      }

      p:last-of-type {
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(32)};
      }
    `}
`;

export default StyledHome;
