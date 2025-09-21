import { useContext, useState } from 'react';
import {
  AdvancedSettingsContext,
  LoaderContext,
  ResultsContext,
} from '../../context';
import loadData from '../../utils/fetchData';

export default function SearchField() {
  const [search, setSearch] = useState('');
  const { query } = useContext(AdvancedSettingsContext);
  const { setResults } = useContext(ResultsContext);
  const { setLoading } = useContext(LoaderContext);

  // onChange handler
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // onSubmit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let allData = [];
    for (let i = 0; i < 9; i++) {
      const data = await loadData(
        `https://image.pollinations.ai/prompt/${search}?width=${
          query.width
        }&height=${query.height}&seed=${Math.round(
          Math.random() * 100
        )}&model=${query.model}`
      );
      allData.push(data);
      console.log(data);
    }
    setResults(allData);
    setLoading(false);
    console.log(search);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm"
      >
        <div className="flex items-center">
          <div className="pl-5 pr-2">
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Create with Prompts"
            className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
          />
          <button
            type="submit"
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
          >
            <svg
              className="w-6 h-6 text-white transform rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
