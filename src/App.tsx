import { useState } from "react";
import Header from "./components/Header";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import MarkdownGuide from "./components/MarkdownGuide";
import Modal from "./components/Modal";
import closeIcon from "./assets/CloseIcon.svg";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [showGuide, setShowguide] = useState(false);

  const onToggleGuide = () => {
    setShowguide((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header onToggleGuide={onToggleGuide} />
      <Modal hidden={!showGuide}>
        <div className="flex border-b border-zinc-400 p-4 items-center">
          <h3 className="text-3xl font-bold mr-auto">Markdown Guide</h3>
          <button className="p-2 ml-4" onClick={onToggleGuide}>
            <img className="h-6 w-6 icon-fill-white" src={closeIcon} />
          </button>
        </div>
        <div className="flex flex-1 overflow-auto p-4">
          <MarkdownGuide />
        </div>
      </Modal>
      <div className="flex-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 overflow-hidden">
        <MarkdownInput value={markdown} onChange={setMarkdown} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
