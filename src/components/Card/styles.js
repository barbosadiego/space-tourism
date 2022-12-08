import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

export const StyledCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100vw;
  pointer-events: none;
  transition: 0.3s;
  z-index: -1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: ${pxToRem(95)};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  background-image: url('./images/destination/background-destination-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    `}

  // styles for tablet
  ${({ isTablet }) =>
    isTablet &&
    css`
      background-image: url('./images/destination/background-destination-tablet.jpg');
      gap: ${pxToRem(140)};
    `}
  
  // styles for desktop
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      background-image: url('./images/destination/background-destination-desktop.jpg');
      height: 100vh;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    `}
`;

export const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 92px;

  & p {
    font-size: ${pxToRem(16)};
    font-weight: 400;
    font-family: 'Barlow Condensed';
    line-height: ${pxToRem(19.2)};
    letter-spacing: 2.7px;
    margin-bottom: 32px;
    text-transform: uppercase;

    span {
      display: inline-block;
      margin-right: 18px;
      color: rgba(255, 255, 255, 0.25);
      font-weight: 700;
      font-size: 1rem;
    }
  }

  & img {
    width: 170px;
    height: 170px;
  }

  // styles for tablet
  ${({ isTablet }) =>
    isTablet &&
    css`
      width: 100%;
      p {
        align-self: flex-start;
        font-size: ${pxToRem(20)};
        line-height: ${pxToRem(24)};
        letter-spacing: 3.38px;

        span {
          font-size: inherit;
          margin-top: 20px;
        }
      }

      img {
        width: 300px;
        height: 300px;
      }
    `}

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      padding-top: 0;

      p {
        align-self: flex-start;
        font-size: ${pxToRem(28)};
        line-height: ${pxToRem(33.6)};
        letter-spacing: 4.72px;

        span {
          font-size: inherit;
        }
      }

      img {
        width: 445px;
        height: 445px;
      }
    `}
`;

export const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;

  h1 {
    font-size: ${pxToRem(56)};
    line-height: ${pxToRem(64.18)};
  }

  p {
    font-size: ${pxToRem(15)};
    line-height: ${pxToRem(25)};
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 32px;
  }

  hr {
    border-color: #383b4b;
    margin-bottom: 32px;
  }

  // styles for tablet
  ${({ isTablet }) =>
    isTablet &&
    css`
      h1 {
        font-size: ${pxToRem(80)};
        line-height: ${pxToRem(91.68)};
      }

      p {
        width: 570px;
        font-size: ${pxToRem(16)};
        line-height: ${pxToRem(28)};
      }
    `}

  // styles for desktop
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      grid-column: 2/3;
      justify-self: start;
      width: 445px;
      display: initial;
      position: initial;
      /* top: 50%;
      transform: translateY(-50%); */
      text-align: left;

      h1 {
        font-size: ${pxToRem(100)};
        line-height: ${pxToRem(114.6)};
      }

      p {
        font-size: ${pxToRem(18)};
        line-height: ${pxToRem(32)};
        margin-bottom: 32px;
      }

      hr {
        margin-bottom: 0;
      }
    `}
`;

export const StyledDistance = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    display: block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(16.8)};
    letter-spacing: 2.36;
    margin-bottom: 12px;
  }

  p {
    font-family: 'Bellefair', sans-serif;
    font-size: ${pxToRem(28)};
    line-height: ${pxToRem(32.09)};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
  }

  // styles for tablet
  ${({ isTablet }) =>
    isTablet &&
    css`
      flex-direction: row;
      justify-content: space-evenly;
      width: 570px;

      span,
      p {
        width: auto;
      }
    `}

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      flex-direction: row;
      justify-content: unset;
      gap: 80px;
    `}
`;
