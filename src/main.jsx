import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AdvancedSettingsContextProvider from './context/AdvancedSettingsContextProvider.jsx';
import LoaderContextProvider from './context/LoaderContextProvider.jsx';
import ResultsContextProvider from './context/ResultsContextProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdvancedSettingsContextProvider>
      <LoaderContextProvider>
        <ResultsContextProvider>
          <App />
        </ResultsContextProvider>
      </LoaderContextProvider>
    </AdvancedSettingsContextProvider>
  </StrictMode>
);
