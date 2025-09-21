import { useState } from 'react';
import { DownloadedImagesContext } from '.';

export default function DownloadImagesContextProvider({ children }) {
  const [downloadImages, setDownloadImages] = useState([]);
  console.log(downloadImages);
  return (
    <>
      <DownloadedImagesContext.Provider
        value={{ downloadImages, setDownloadImages }}
      >
        {children}
      </DownloadedImagesContext.Provider>
    </>
  );
}
