import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './imageModal.css';
import { statsPhoto } from '../unsplash-api';

const ImageModal = ({ isOpen, closeModal, imgModalData }) => {
    const [photoViews, setPhotoViews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen && imgModalData && imgModalData.id) {
            document.body.style.overflow = 'hidden';
            setIsLoading(true);
            statsPhoto(imgModalData.id).then((result) => {
                setPhotoViews(result.response);
                setIsLoading(false);
            });
        } else {
            document.body.style.overflow = 'auto';
            setPhotoViews(null);
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, imgModalData]);

    const numberComma = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(imgModalData.urls.raw);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${imgModalData.user.username}.jpg`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Image download failed', error);
        }
    };

    if (!isOpen || !imgModalData) {
        return null;
    }
    console.log(imgModalData);

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
            <div className="modal-header">
                <img src={imgModalData.user.profile_image.large} alt={`${imgModalData.user.name} 프로필 이미지`} />
                <span>{imgModalData.user.name}</span>
            </div>
            <div className="modal-main">
                <img src={imgModalData.urls.regular} alt="모달 콘텐츠" />
            </div>
            <div className="modal-footer">
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="img-info">
                            <div className="img-view-info">
                                <span>조회수</span>
                                <span>{photoViews ? numberComma(photoViews.views.total) : '-'}</span>
                            </div>
                            <div className="img-view-info">
                                <span>다운로드 수</span>
                                <span>{photoViews ? numberComma(photoViews.downloads.total) : '-'}</span>
                            </div>
                            <div className="img-view-info">
                                <span>게시날짜</span>
                                <span>{imgModalData.created_at.slice(0, 10)}</span>
                            </div>
                        </div>
                        <div className="img-download">
                            <button onClick={handleDownload}>다운로드</button>
                        </div>
                    </>
                )}
            </div>
            <img className="close-modal" src="/close-icon.svg" alt="모달 닫기" onClick={closeModal} />
        </Modal>
    );
};

export default ImageModal;
