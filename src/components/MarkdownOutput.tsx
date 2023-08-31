import { FC } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import "./MarkdownOutput.css";

interface MarkdownOutputProps {
  markdown: string;
}

const markdownComponents: Components = {
  a: ({ children, ...props }) => (
    <a {...props} target="_blank">
      {children}
    </a>
  ),
};
const MarkdownOutput: FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <div className="h-full flex flex-col overflow-hidden bg-zinc-800">
      <div className="h-full overflow-auto p-2">
        <ReactMarkdown
          className="react-markdown-components"
          components={markdownComponents}
        >
          {markdown}
        </ReactMarkdown>
      </div>
      <hr className="border-2 border-zinc-900" />
      <p className="p-2 text-base text-center">Preview</p>
    </div>
  );
};

export default MarkdownOutput;
