import React, { PropsWithChildren, useState } from 'react';

interface props extends PropsWithChildren {
  trigger: JSX.Element;
}

const MyModal = ({ trigger, children }: props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default MyModal;
