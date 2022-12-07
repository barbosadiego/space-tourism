import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.js';
import Theme from './theme/theme.js';
import { BrowserRouter } from 'react-router-dom';
import { WindowContextProvider } from './contexts/windowContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <WindowContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WindowContextProvider>
    </Theme>
  </React.StrictMode>,
);
