import styled from 'styled-components';
import pxToRem from '../../helper/tipographySwitch';

const NavText = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(19)};
  text-transform: uppercase;
  letter-spacing: ${pxToRem(2.7)};
`;

export default NavText;
