import React from 'react';
import Modal from 'react-modal';
import './imageModal.css';
import { statsPhoto } from '../unsplash-api';

const ImageModal = ({ isOpen, closeModal, imgModalData }) => {
    // console.log(imgModalData);
    statsPhoto(imgModalData.id).then((result) => {
        const photoViews = result.response;
        console.log(photoViews);
    });
    return (
        <div>
            {isOpen ? (
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-header">
                        <img src={imgModalData.user.profile_image.large} alt="" />
                        <span>{imgModalData.user.name}</span>
                    </div>
                    <div className="modal-main">
                        <img src={imgModalData.urls.regular}></img>
                    </div>
                    <button className="close-modal" onClick={closeModal}>
                        Close
                    </button>
                </Modal>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ImageModal;
