import React, { useState } from 'react';
import './header.css';
import { createApi } from 'unsplash-js';

const Header = ({ searchWord, searchData }) => {
    const [keyword, setKeyword] = useState('');
    const unsplash = createApi({
        accessKey: 'sQC0kH3cG6V5Ch-rOP4JmUsy5OiUGtTdQDidEikn3qU',
    });
    const handleSearch = (event) => {
        event.preventDefault();
        unsplash.search
            .getPhotos({
                query: keyword,
                page: 1,
                perPage: 20,
            })
            .then((result) => {
                if (result.type === 'success') {
                    const photo = result.response.results;
                    searchWord(keyword);
                    searchData(photo);
                }
            });
    };
    return (
        <header>
            <nav>
                <div className="logo">Unsplash Clone</div>
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                    />
                    <button>검색</button>
                </form>
            </nav>
        </header>
    );
};

export default Header;
