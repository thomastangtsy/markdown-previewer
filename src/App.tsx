import { useState } from "react";
import Header from "./components/Header";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import MarkdownGuide from "./components/MarkdownGuide";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [showGuide, setShowguide] = useState(false);

  const onToggleGuide = () => {
    setShowguide((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header onToggleGuide={onToggleGuide} />
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          hidden={!showGuide}
        >
          <div className="fixed inset-0 z-10">
            <div className="flex h-full items-center justify-center p-4 text-center mx-auto">
              <div className="flex flex-col relative max-h-[80%] w-[80%] rounded-lg bg-zinc-800 text-left shadow-xl transition-all">
                <div className="flex border-b border-zinc-400 p-4 items-center">
                  <h3 className="text-3xl font-bold mr-auto">Markdown Guide</h3>
                  <button
                    className="p-2 ml-4 rounded bg-cyan-600 hover:bg-cyan-400 duration-200"
                    onClick={onToggleGuide}
                  >
                    close
                  </button>
                </div>
                <div className="flex flex-1 overflow-auto p-4">
                  <MarkdownGuide />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto columns-2 gap-2 overflow-hidden">
        <MarkdownInput value={markdown} onChange={setMarkdown} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
