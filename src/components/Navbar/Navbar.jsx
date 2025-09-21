import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { RouteContext } from '../../context';

export default function Navbar() {
  const { setRoute } = useContext(RouteContext);
  return (
    <>
      <header className="flex items-center mb-12 justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-10" />
        </div>
        <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
          <a
            onClick={() => setRoute('create image')}
            className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all"
          >
            Create Image
          </a>
          <a
            onClick={() => setRoute('download')}
            className="hover:text-zinc-200 cursor-pointer transition-all"
          >
            Downloaded
          </a>
        </ul>
      </header>
    </>
  );
}
