import { useState } from 'react';
import { RouteContext } from '.';

export default function RouteContextProvider({ children }) {
  const [route, setRoute] = useState('create image');
  return (
    <>
      <RouteContext.Provider value={{ route, setRoute }}>
        {children}
      </RouteContext.Provider>
    </>
  );
}
