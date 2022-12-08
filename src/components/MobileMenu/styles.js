import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

export const StyledMobileMenu = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;

  button {
    z-index: 10;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
`;

export const SyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 11px;
  position: relative;

  span {
    font-family: 'Barlow Condensed';
    font-weight: 700;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(19.2)};
    letter-spacing: ${pxToRem(2.7)};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        position: absolute;
        content: '';
        width: 4px;
        height: 31px;
        background-color: ${({ theme }) => theme.colors.white};
        right: 0;
      }
    `}
`;

export const MobileMenuArea = styled.ul`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 100vh;
  transform: translate3d(110%, 0, 0);
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 120px;
  padding-left: 32px;
  transition: 0.3s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 80%;
      transform: translate3d(0, 0, 0);
    `}
`;
