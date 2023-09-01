import { FC, Fragment } from "react";
import Markdown from "./Markdown";

const markdownSyntaxExamples: Record<string, string> = {
  Italic: "_Italic_ or *italic*",
  Bold: "__Bold__ or **bold**",
  Link: "[Link](https://google.com)",
  "Code Block": "```\nCode Block L1\nCode Block L2\nCode Block L3\n```",
  "Inline Code": "Insert `code` inline",
};

const MarkdownGuide: FC = () => {
  return (
      <table className="w-full">
        {Object.keys(markdownSyntaxExamples).map((type) => {
          return (
            <Fragment key={type}>
              <tr className="mb-4">
                <th colSpan={3}>
                  <h4 className="text-2xl font-bold">{type}</h4>
                  <hr className="border-zinc-600 mb-2" />
                </th>
              </tr>
              <tr>
                <td className="w-[48%]">
                  <code className="whitespace-pre-line min-w-min break-words">
                    {markdownSyntaxExamples[type]}
                  </code>
                </td>
                <td className="w-[4%] mx-4">
                  <p>➡️</p>
                </td>
                <td className="w-[48%]">
                  <Markdown className="min-w-min">
                    {markdownSyntaxExamples[type]}
                  </Markdown>
                </td>
              </tr>
            </Fragment>
          );
        })}
      </table>
  );
};

export default MarkdownGuide;
