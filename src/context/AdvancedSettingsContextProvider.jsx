import { useState } from 'react';
import { AdvancedSettingsContext } from '.';

export default function AdvancedSettingsContextProvider({ children }) {
  const [query, setQuery] = useState({
    model: '',
    height: '',
    width: '',
  });

  console.log(query);

  return (
    <>
      <AdvancedSettingsContext.Provider value={{ query, setQuery }}>
        {children}
      </AdvancedSettingsContext.Provider>
    </>
  );
}
