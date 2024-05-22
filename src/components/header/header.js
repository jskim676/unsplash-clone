import React from 'react';
import './header.css';
import { createApi } from 'unsplash-js';

const Header = () => {
    const unsplash = createApi({
        accessKey: 'sQC0kH3cG6V5Ch-rOP4JmUsy5OiUGtTdQDidEikn3qU',
    });
    unsplash.search
        .getPhotos({
            query: 'cat',
            page: 1,
            perPage: 20,
        })
        .then((result) => {
            if (result.type === 'success') {
                const photo = result.response;
                console.log(photo);
            }
        });
    return (
        <header>
            <nav>
                <div className="logo">Unsplash Clone</div>
                <div className="search-bar">
                    <input type="text" />
                    <button>검색</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
