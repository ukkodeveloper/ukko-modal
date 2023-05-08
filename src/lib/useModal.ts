import { useCallback, useState } from 'react';

const useModal = (isShow: boolean) => {
  const [isOpen, setIsOpen] = useState(isShow);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = useCallback(() => {
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 510);
  }, []);

  return { isOpen, isClosing, openModal, closeModal };
};

export default useModal;
