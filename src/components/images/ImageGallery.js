import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import { listPhotos } from '../unsplash-api';

const ImageGallery = ({ images }) => {
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
    }, [images]);

    if (Array.isArray(images) && images.length === 0) {
        return null;
    }

    return (
        <section className="image-gallery">
            {Array.isArray(images) && images.length > 0
                ? images.map((image) => <img key={image.id} src={image.urls.small} alt={image.alt_description} />)
                : photolist.map((item) => <img key={item.id} src={item.urls.small} alt={item.alt_description} />)}
        </section>
    );
};

export default ImageGallery;
