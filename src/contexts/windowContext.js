import { createContext, useState } from 'react';

export const WindowContext = createContext();

export function WindowContextProvider({ children }) {
  const [windowData, setWindowData] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  return (
    <WindowContext.Provider value={{ windowData, setWindowData }}>
      {children}
    </WindowContext.Provider>
  );
}
