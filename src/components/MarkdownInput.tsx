import { ChangeEvent, FC, useCallback } from "react";

interface MarkdownInputProps {
  onChange: (markdown: string) => void;
  value: string;
}

const MarkdownInput: FC<MarkdownInputProps> = ({ onChange, value }) => {
  const onTextareaChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange],
  );

  return (
    <div className="h-full flex flex-col bg-zinc-800">
      <textarea
        className="flex-auto resize-none p-2 font-mono bg-inherit caret-white placeholder:text-zinc-700 placeholder:italic focus:border-zinc-700"
        onChange={onTextareaChange}
        placeholder="Edit Markdown here."
        value={value}
        wrap="off"
      />
      <hr className="border-2 border-zinc-900" />
      <p className="p-2 text-base text-center">Markdown</p>
    </div>
  );
};

export default MarkdownInput;
