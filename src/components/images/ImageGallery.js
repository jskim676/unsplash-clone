import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    return (
        <section className="image-gallery">
            {images.length > 0 ? (
                images.map((image) => <img key={image.id} src={image.urls.small} alt={image.alt_description} />)
            ) : (
                <></>
            )}
        </section>
    );
};

export default ImageGallery;
