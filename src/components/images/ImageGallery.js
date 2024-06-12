import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import { listPhotos, topicsPhotos, searchPhotos } from '../unsplash-api';

const ImageGallery = ({ search, topic, modalSwitch, selectImgData }) => {
    const [photolist, setPhotolist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (search) {
            searchPhotos(search, 1, 20).then((result) => {
                if (result.type === 'success') {
                    const searchPhotos = result.response.results;
                    setPhotolist(searchPhotos);
                }
                setLoading(false);
            });
        } else if (topic) {
            topicsPhotos(topic, 1, 20).then((result) => {
                if (result.type === 'success') {
                    const topicPhotos = result.response.results;
                    setPhotolist(topicPhotos);
                }
                setLoading(false);
            });
        } else {
            listPhotos(1, 20).then((result) => {
                if (result.type === 'success') {
                    const photos = result.response.results;
                    setPhotolist(photos);
                }
                setLoading(false);
            });
        }
    }, [search, topic]);

    const imgModal = (data) => {
        modalSwitch(true);
        selectImgData(data);
    };

    return (
        <section className="image-gallery">
            {loading ? (
                <div className="loading">loading...</div>
            ) : (
                <div className="gallery-container">
                    <div className="image-container">
                        {photolist.map((item) => (
                            <img
                                key={item.id}
                                src={item.urls.small}
                                alt={item.alt_description}
                                onClick={() => imgModal(item)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ImageGallery;
