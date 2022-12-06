import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

export const StyledItem = styled.li`
  position: relative;

  // these styles are aplied only if active variable is true
  ${({ active }) =>
    active &&
    css`
      &::after {
        position: absolute;
        bottom: -16px;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.white};
        z-index: 5;
      }
    `}
  a {
    padding: 20px 0;
    display: inline-block;
  }
`;

const StyledMenu = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0px 20px 20px;
  padding-top: ${({ isDesktop }) => (isDesktop ? '40px' : '0px')};

  & ul {
    grid-column: 2/3;
    justify-self: ${({ isDesktop }) => (isDesktop ? 'right' : 'unset')};
    width: 100%;
    height: 96px;
    display: flex;
    align-items: center;
    gap: 37px;
    width: ${({ isDesktop }) => (isDesktop ? '700px' : 'unset')};
    justify-content: space-evenly;
    position: relative;

    &::after {
      content: '';
      grid-column: 2/3;
      position: absolute;
      width: 200%;
      height: 96px;
      z-index: -1;
      background-color: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40px);
      transform: translateX(20%);
    }

    // these styles are aplied only if isDesktop variable is true
    ${({ isDesktop }) =>
      isDesktop &&
      css`
        a {
          display: flex;
          gap: 11px;
        }

        span {
          color: ${({ theme }) => theme.colors.white};
          font-family: 'Barlow Condensed', sans-serif;
          font-size: ${pxToRem(16)};
          font-weight: 700;
          line-height: ${pxToRem(19.2)};
          letter-spacing: ${pxToRem(2.7)};
        }

        &::before {
          position: absolute;
          left: -470px;
          content: '';
          height: 1px;
          width: 470px;
          background-color: rgba(255, 255, 255, 0.25);
        }
      `}
  }
`;

export default StyledMenu;
