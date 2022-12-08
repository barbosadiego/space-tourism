import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

export const StyledDial = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  position: absolute;
  width: 100vw;
  top: 335px;
  left: 0;
  z-index: 10;

  ${({ isTablet }) =>
    isTablet &&
    css`
      left: 50%;
      transform: translateX(-50%);
      gap: 36px;
      width: 235px;
      top: 520px;
    `}

  ${({ isDesktop }) =>
    isDesktop &&
    css`
      position: relative;
      top: 50%;
      left: 50%;
      width: 445px;

      button:hover {
        border-bottom-color: rgba(255, 255, 255, 0.5);
      }
    `}
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-bottom: 3px solid transparent;
  background-color: transparent;
  font-family: 'Barlow Condensed';
  font-size: ${pxToRem(14)};
  text-transform: uppercase;
  letter-spacing: 2.36px;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 0;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      border-bottom-color: ${({ theme }) => theme.colors.white};
    `}
`;
