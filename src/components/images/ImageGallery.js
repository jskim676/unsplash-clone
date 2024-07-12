import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import { listPhotos, topicsPhotos, searchPhotos } from '../unsplash-api';

const ImageGallery = ({ search, topic, modalSwitch, selectImgData }) => {
    const [photolist, setPhotolist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadedPhotoIds, setLoadedPhotoIds] = useState(new Set());

    const fetchPhotos = (newPage) => {
        setLoading(true);
        if (newPage === 1) {
            setPhotolist([]);
        }
        if (search) {
            searchPhotos(search, newPage, 20).then((result) => {
                if (result.type === 'success') {
                    const searchPhotos = result.response.results;
                    setPhotolist((prevPhotos) => [...prevPhotos, ...searchPhotos]);
                }
                setLoading(false);
            });
        } else if (topic) {
            topicsPhotos(topic, newPage, 20).then((result) => {
                if (result.type === 'success') {
                    const topicPhotos = result.response.results;
                    setPhotolist((prevPhotos) => [...prevPhotos, ...topicPhotos]);
                }
                setLoading(false);
            });
        } else {
            listPhotos(newPage, 20).then((result) => {
                if (result.type === 'success') {
                    const photos = result.response.results;
                    if (newPage === 1) {
                        setPhotolist(photos);
                        setLoadedPhotoIds(new Set(photos.map((photo) => photo.id)));
                    } else {
                        const newPhotos = photos.filter((photo) => !loadedPhotoIds.has(photo.id));
                        setPhotolist((prevPhotos) => [...prevPhotos, ...newPhotos]);
                        setLoadedPhotoIds((prevIds) => {
                            const newIds = new Set(prevIds);
                            newPhotos.forEach((photo) => newIds.add(photo.id));
                            return newIds;
                        });
                    }
                }
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        setPage(1);
        fetchPhotos(1);
    }, [search, topic]);

    const imgModal = (data) => {
        modalSwitch(true);
        selectImgData(data);
    };

    const loadMorePhotos = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchPhotos(nextPage);
    };

    return (
        <section className="image-gallery">
            {loading && page === 1 ? (
                <div className="loading">loading...</div>
            ) : (
                <div className="gallery-container">
                    <div className="image-container">
                        {photolist.length > 0 ? (
                            <>
                                <div className="image-container">
                                    {photolist.map((item) => (
                                        <img
                                            className="photo"
                                            key={item.id}
                                            src={item.urls.small}
                                            alt={item.alt_description}
                                            onClick={() => imgModal(item)}
                                        />
                                    ))}
                                </div>
                                <button className="show-more-btn" onClick={loadMorePhotos}>
                                    더 보기
                                </button>
                            </>
                        ) : (
                            <img className="result-empty" src="./result-empty.png" alt="" />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageGallery;
