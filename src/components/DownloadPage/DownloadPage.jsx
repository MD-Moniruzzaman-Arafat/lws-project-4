import { useContext } from 'react';
import { DownloadedImagesContext } from '../../context';
import ResultCard from '../Result/ResultCard';

export default function DownloadPage() {
  const { downloadImages } = useContext(DownloadedImagesContext);
  return (
    <>
      <main className="relative z-10">
        {/* <!-- Welcome Message --> */}
        <h2 className="text-4xl font-bold mb-8">
          Downloaded <span className="text-2xl">👋</span>
        </h2>

        {/* <!-- Image Presets Section --> */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {downloadImages?.map((image, index) => (
              <ResultCard key={index} result={image} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
