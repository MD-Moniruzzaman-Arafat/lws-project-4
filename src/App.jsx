import { useContext } from 'react';
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import Glow from './components/Glow/Glow';
import Navbar from './components/Navbar/Navbar';
import Result from './components/Result/Result';
import SearchField from './components/SearchField/SearchField';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import { RouteContext } from './context';

function App() {
  const { route } = useContext(RouteContext);
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navbar />
        {route === 'create image' && (
          <>
            <Glow />
            <main className="relative z-10">
              <WelcomeMessage />
              <SearchField />
              <SettingsPanel />
              <Result />
            </main>
          </>
        )}
        {route === 'download' && <DownloadPage />}
      </div>
    </>
  );
}

export default App;
