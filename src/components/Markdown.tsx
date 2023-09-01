import { FC, useMemo } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import "./Markdown.css";

interface MarkdownProps {
  children: string;
  className?: string;
}

const markdownComponents: Components = {
  a: ({ children, ...props }) => (
    <a {...props} target="_blank">
      {children}
    </a>
  ),
};

const Markdown: FC<MarkdownProps> = ({ children, className }) => {
  const markdownClassNames = useMemo(() => {
    return ["react-markdown-components", className]
      .filter((className) => !!className)
      .join(" ");
  }, [className]);

  return (
    <ReactMarkdown
      className={markdownClassNames}
      components={markdownComponents}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
