// AvailableDriversContext.js
import { createContext, useState, useContext } from 'react';

const AvailableDriversContext = createContext();

export const useAvailableDrivers = () => {
  return useContext(AvailableDriversContext);
};

export const AvailableDriversProvider = ({ children }) => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <AvailableDriversContext.Provider value={{ selectedDriver, setSelectedDriver }}>
      {children}
    </AvailableDriversContext.Provider>
  );
};

export default AvailableDriversContext;
