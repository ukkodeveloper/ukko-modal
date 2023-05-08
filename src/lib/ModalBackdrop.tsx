import React from 'react';
import { useEffect } from 'react';

interface BackdropProps {
  onClose: React.Dispatch<React.SetStateAction<void>>;
}

const ModalBackdrop = ({ onClose }: BackdropProps) => {
  useEffect(() => {
    const handleKeyupEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keyup', handleKeyupEscape);

    return () => {
      window.removeEventListener('keyup', handleKeyupEscape);
    };
  }, []);

  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        onClose();
      }}
    />
  );
};

export default ModalBackdrop;
