import { FC, ReactNode, useCallback } from "react";

interface ModalProps {
  children: ReactNode;
  hidden?: boolean;
}

const Modal: FC<ModalProps> = ({ children, hidden }) => {
  const applyHidden = useCallback(
    (className: string) => {
      return [className, hidden ? "hidden" : undefined]
        .filter((c) => c)
        .join(" ");
    },
    [hidden],
  );

  return (
    <div
      className={"relative z-10"}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={applyHidden(
          "fixed inset-0 bg-black bg-opacity-75 transition-opacity",
        )}
      >
        <div className="fixed inset-0 z-10">
          <div className="flex h-full items-center justify-center p-4 text-center mx-auto">
            <div className="flex flex-col relative max-h-[80%] w-[80%] rounded-lg bg-zinc-800 text-left shadow-xl transition-all">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
