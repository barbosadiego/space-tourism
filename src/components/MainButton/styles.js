import styled from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

const MainButton = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ buttonWidth }) => buttonWidth + 'px'};
  height: ${({ buttonWidth }) => buttonWidth + 'px'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ buttonWidth }) => buttonWidth / 120 + 'rem'};
  line-height: ${pxToRem(36.7)};
  letter-spacing: ${pxToRem(2)};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  // only on desktop
  &:hover {
    box-shadow: 0 0 0 ${pxToRem(88)} rgba(256, 256, 256, 0.1);
  }
`;

export default MainButton;
