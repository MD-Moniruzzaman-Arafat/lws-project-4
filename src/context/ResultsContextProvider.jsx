import { useState } from 'react';
import { ResultsContext } from '.';

export default function ResultsContextProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <>
      <ResultsContext.Provider value={{ results, setResults }}>
        {children}
      </ResultsContext.Provider>
    </>
  );
}
