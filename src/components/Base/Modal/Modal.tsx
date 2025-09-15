import './Modal.scss';

import { useRef, useEffect } from 'react';
function Modal({ children, open }: any) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>
  );
}

export default Modal;
