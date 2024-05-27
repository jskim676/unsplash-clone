import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    const [photolist, setPhotolist] = useState([]);

    useEffect(() => {
        if (images.length === 0) {
            const unsplash = createApi({
                accessKey: 'sQC0kH3cG6V5Ch-rOP4JmUsy5OiUGtTdQDidEikn3qU',
            });
            unsplash.photos
                .list({
                    page: 1,
                    perPage: 20,
                })
                .then((result) => {
                    if (result.type === 'success') {
                        const photos = result.response.results;
                        setPhotolist(photos);
                    }
                });
        }
    }, [images]);

    return (
        <section className="image-gallery">
            {images.length > 0
                ? images.map((image) => <img key={image.id} src={image.urls.small} alt={image.alt_description} />)
                : photolist.map((item) => <img key={item.id} src={item.urls.small} alt={item.alt_description}></img>)}
        </section>
    );
};

export default ImageGallery;
