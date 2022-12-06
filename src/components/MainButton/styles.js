import styled, { css } from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

const StyledMainButton = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ buttonWidth }) => buttonWidth + 'px'};
  height: ${({ buttonWidth }) => buttonWidth + 'px'};
  border-radius: 50%;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: ${({ buttonWidth }) => buttonWidth / 120 + 'rem'};
  line-height: ${pxToRem(36.7)};
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    box-shadow: 0 0 0 10px rgba(256, 256, 256, 0.5);
  }

  // only on desktop
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      &:hover {
        box-shadow: 0 0 0 ${pxToRem(88)} rgba(256, 256, 256, 0.1);
      }
    `}
`;

export default StyledMainButton;
