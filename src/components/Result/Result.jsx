import { useContext } from 'react';
import { ResultsContext } from '../../context';
import ResultCard from './ResultCard';

export default function Result() {
  const { results } = useContext(ResultsContext);
  return (
    <>
      <div>
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* <!-- Image Card 1 --> */}
          {results?.map((result, index) => (
            <ResultCard key={index} result={result} />
          ))}
        </div>
      </div>
    </>
  );
}
