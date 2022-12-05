import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0B0D17',
    secondary: '#D0D6F9',
    white: '#FFFFFF',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
