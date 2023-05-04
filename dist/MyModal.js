import React, { useState } from 'react';
const MyModal = ({ trigger, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.cloneElement(trigger, { onClick: handleOpenModal }),
        isModalOpen && (React.createElement("div", { className: "modal-overlay", onClick: handleCloseModal },
            React.createElement("div", { className: "modal", onClick: (e) => e.stopPropagation() }, children)))));
};
export default MyModal;
