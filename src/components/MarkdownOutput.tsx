import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <div className="h-full flex flex-col overflow-hidden bg-zinc-800">
      <div className="h-full overflow-auto p-2">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <hr className="border-2 border-zinc-900" />{" "}
      <p className="p-2 text-base text-center">Preview</p>
    </div>
  );
};

export default MarkdownOutput;
