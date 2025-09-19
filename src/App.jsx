import './App.css';
import Glow from './components/Glow/Glow';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/SearchField/SearchField';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Navbar />
        <Glow />
        <main className="relative z-10">
          <WelcomeMessage />
          <SearchField />
          <SettingsPanel />
        </main>
      </div>
    </>
  );
}

export default App;
