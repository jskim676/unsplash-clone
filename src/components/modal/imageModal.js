import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, closeModal }) => {
    return (
        <div>
            {isOpen ? (
                <Modal isOpen={isOpen} onRequestClose={closeModal}>
                    <div>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </Modal>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ImageModal;
