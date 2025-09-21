import { useContext, useEffect, useState } from 'react';
import { AdvancedSettingsContext } from '../../context';
import loadModel from '../../utils/fetchModel';

export default function SettingsPanel() {
  const { query, setQuery } = useContext(AdvancedSettingsContext);
  const [models, setModels] = useState([]);

  // handleChange function
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  function handleAspectRatio(e, ratio) {
    e.preventDefault();
    switch (ratio) {
      case '1:1':
        setQuery({ ...query, width: 512, height: 512 });
        break;
      case '4:3':
        setQuery({ ...query, width: 640, height: 480 });
        break;
      case '3:2':
        setQuery({ ...query, width: 600, height: 400 });
        break;
      case '16:9':
        setQuery({ ...query, width: 640, height: 360 });
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    async function fetchModel() {
      const response = await loadModel('https://image.pollinations.ai/models');
      setModels(response);
    }
    fetchModel();
  }, []);

  return (
    <>
      <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Advanced Settings</h4>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* <!-- Model Selection --> */}
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Model
            </label>
            <select
              id="model"
              name="model"
              onChange={handleChange}
              className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Select a model</option>
              {models?.map((model) => {
                return (
                  <option className="bg-zinc-900" value={model} key={model}>
                    {model}
                  </option>
                );
              })}
            </select>
          </div>

          {/* <!-- Seed Input : Auto Generated, readonly htmlFor user --> */}
          <div>
            <label
              htmlFor="seed"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Seed (htmlFor reproducible results)
            </label>
            <input
              type="number"
              id="seed"
              disabled
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Random"
            />
          </div>

          {/* <!-- Width Input --> */}
          <div>
            <label
              htmlFor="width"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Width
            </label>
            <input
              name="width"
              onChange={handleChange}
              value={query.width}
              type="number"
              id="width"
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* <!-- Height Input --> */}
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Height
            </label>
            <input
              name="height"
              onChange={handleChange}
              value={query.height}
              type="number"
              id="height"
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* <!-- Aspect Ratio Presets --> */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Aspect Ratio Presets
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={(e) => handleAspectRatio(e, '1:1')}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                1:1
              </button>

              <button
                onClick={(e) => handleAspectRatio(e, '4:3')}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                4:3
              </button>
              <button
                onClick={(e) => handleAspectRatio(e, '16:9')}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                16:9
              </button>

              <button
                onClick={(e) => handleAspectRatio(e, '3:2')}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                3:2
              </button>
            </div>
          </div>

          {/* <!-- No Logo Toggle --> */}
        </form>
      </div>
    </>
  );
}
