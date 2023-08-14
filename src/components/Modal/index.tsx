import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [closeModal]);

  return createPortal(
    <div className="modal">
      <div className="modal__container">{children}</div>
    </div>,
    document.querySelector('#modal-root') as HTMLElement
  );
};

export default Modal;
