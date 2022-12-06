import styled, { css } from 'styled-components';

const StyledMenu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;

  & ul {
    display: flex;
    gap: 37px;

    &::after {
      content: '';
      background-color: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(40px);
      position: absolute;
      width: 60%;
      height: 96px;
      top: 0;
      right: -30px;
      z-index: -1;
      transform: translateX(-30px);
    }

    li {
      position: relative;
      ${({ active }) =>
        active &&
        css`
          background-color: red;
        `}
      &::after {
        position: absolute;
        bottom: -16px;
        left: 0;
        content: '';
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.white};
      }
      a {
        padding: 20px 0;
        display: inline-block;
      }
    }
  }
`;

export default StyledMenu;
