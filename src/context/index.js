import { createContext } from 'react';

const AdvancedSettingsContext = createContext();
const ResultsContext = createContext();
const LoaderContext = createContext();
const RouteContext = createContext();
const DownloadedImagesContext = createContext();

export {
  AdvancedSettingsContext,
  DownloadedImagesContext,
  LoaderContext,
  ResultsContext,
  RouteContext,
};
