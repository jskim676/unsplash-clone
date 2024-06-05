import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './imageModal.css';
import { statsPhoto } from '../unsplash-api';

const ImageModal = ({ isOpen, closeModal, imgModalData }) => {
    const [photoViews, setPhotoViews] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setPhotoViews(null);
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (imgModalData && imgModalData.id) {
            statsPhoto(imgModalData.id).then((result) => {
                setPhotoViews(result.response);
            });
        }
    }, [imgModalData]);

    const numberComma = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <div>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <div className="modal-header">
                        <img src={imgModalData.user.profile_image.large} alt={`${imgModalData.user.name} profile`} />
                        <span>{imgModalData.user.name}</span>
                    </div>
                    <div className="modal-main">
                        <img src={imgModalData.urls.regular} alt="Modal content" />
                    </div>
                    <div className="modal-footer">
                        {photoViews ? (
                            <>
                                <div className="img-view-info">
                                    <span>조회수</span>
                                    <span>{numberComma(photoViews.views.total)}</span>
                                </div>
                                <div className="img-view-info">
                                    <span>다운로드</span>
                                    <span>{numberComma(photoViews.downloads.total)}</span>
                                </div>
                                <div className="img-view-info">
                                    <span>게시날짜</span>
                                    <span>{imgModalData.created_at.slice(0, 10)}</span>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <button className="close-modal" onClick={closeModal}>
                        <img src="/close-icon.svg" alt="Close modal" />
                    </button>
                </Modal>
            )}
        </div>
    );
};

export default ImageModal;
