import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import "./modal.css";
type propType = {
  title: string;
  description: string;
};
const Dialog = forwardRef(function Modal(
  { title, description }: propType,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
      close() {
        dialog.current?.close();
      },
    };
  });
  return createPortal(
    <dialog className="dialog" ref={dialog}>
      <h1 className="dialog-title">{title}</h1>
      <div className="dialog-description">
        <p className="dialog-description-text">{description}</p>
      </div>
      <form method="dialog">
        <button className="btn btn-danger">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
});
export default Dialog;
