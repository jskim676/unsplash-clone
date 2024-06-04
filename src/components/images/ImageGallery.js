import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import { listPhotos, topicsPhotos } from '../unsplash-api';

const ImageGallery = ({ images, modalSwitch, imgData, topic }) => {
    const [photolist, setPhotolist] = useState([]);
    useEffect(() => {
        if (images === '') {
            listPhotos(1, 20).then((result) => {
                if (result.type === 'success') {
                    const photos = result.response.results;
                    setPhotolist(photos);
                }
            });
        }
        if (topic !== '') {
            topicsPhotos(topic, 1, 20).then((result) => {
                if (result.type === 'success') {
                    const topicPhotos = result.response.results;
                    setPhotolist(topicPhotos);
                }
            });
        }
    }, [images, topic]);

    if (Array.isArray(images) && images.length === 0) {
        return null;
    }

    const imgModal = (data) => {
        modalSwitch(true);
        imgData(data);
    };

    return (
        <section className="image-gallery">
            {Array.isArray(images) && images.length > 0
                ? images.map((image) => (
                      <img
                          key={image.id}
                          src={image.urls.small}
                          alt={image.alt_description}
                          onClick={() => imgModal(image)}
                      />
                  ))
                : photolist.map((item) => (
                      <img
                          key={item.id}
                          src={item.urls.small}
                          alt={item.alt_description}
                          onClick={() => imgModal(item)}
                      />
                  ))}
        </section>
    );
};

export default ImageGallery;
