import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AdvancedSettingsContextProvider from './context/AdvancedSettingsContextProvider.jsx';
import DownloadImagesContextProvider from './context/DownloadImagesContextProvider.jsx';
import LoaderContextProvider from './context/LoaderContextProvider.jsx';
import ResultsContextProvider from './context/ResultsContextProvider.jsx';
import RouteContextProvider from './context/RouteContextProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteContextProvider>
      <AdvancedSettingsContextProvider>
        <LoaderContextProvider>
          <ResultsContextProvider>
            <DownloadImagesContextProvider>
              <App />
            </DownloadImagesContextProvider>
          </ResultsContextProvider>
        </LoaderContextProvider>
      </AdvancedSettingsContextProvider>
    </RouteContextProvider>
  </StrictMode>
);
