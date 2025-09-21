import { useState } from 'react';
import { LoaderContext } from '.';

export default function LoaderContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <LoaderContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoaderContext.Provider>
    </>
  );
}
