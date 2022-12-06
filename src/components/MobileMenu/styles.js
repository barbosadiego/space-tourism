import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

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

const StylesMobileMenu = styled.header`
  display: flex;
  justify-content: space-between;

  & ul {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    top: 0;
    right: -100%;
    bottom: 0;
    width: 0px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 120px;
    padding-left: 32px;
    transition: 0.3s;
    overflow: hidden;

    ${({ isOpen }) =>
      isOpen &&
      css`
        right: 0%;
        width: 80%;
      `}

    li {
    }
  }

  button {
    z-index: 10;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
`;

export default StylesMobileMenu;
