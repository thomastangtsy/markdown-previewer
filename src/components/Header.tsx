import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-screen p-4 bg-zinc-800 border-b border-b-zinc-600">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Markdown Previewer</h1>
        <button className="p-2 rounded bg-cyan-600 hover:bg-cyan-400 duration-200">
          Guide
        </button>
      </nav>
    </header>
  );
};

export default Header;
