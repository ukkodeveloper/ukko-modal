import React, { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';
import useModal from './useModal';
import ModalBackdrop from './ModalBackdrop';
import './styles.css';

interface props extends PropsWithChildren {
  trigger?: JSX.Element;
  isShow?: boolean;
}

const Modal = ({ trigger, isShow = false, children }: props) => {
  const { isOpen, isClosing, openModal, closeModal } = useModal(isShow);

  return (
    <>
      {trigger && React.cloneElement(trigger, { onClick: openModal })}
      {isOpen && (
        <>
          <ModalBackdrop onClose={closeModal} />
          {createPortal(
            <div
              className={`modal${isClosing ? ' closing' : ''}`}
              onClick={(e) => {
                const target = e.target;
                if (target instanceof HTMLElement && target.dataset.modal === 'close') {
                  closeModal();
                }

                e.stopPropagation();
              }}
            >
              {children}
            </div>,
            document.body
          )}
        </>
      )}
    </>
  );
};

export default Modal;
