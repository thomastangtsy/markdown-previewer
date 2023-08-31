import { useState } from "react";
import Header from "./components/Header";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const onToggleGuide = () => {
    // TODO: Toggle guide when "Guide" button is clicked
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header onToggleGuide={onToggleGuide} />
      <div className="flex-auto columns-2 gap-2 overflow-hidden">
        <MarkdownInput value={markdown} onChange={setMarkdown} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
