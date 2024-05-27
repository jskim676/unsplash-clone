import React, { useState } from 'react';
import './header.css';
import { searchPhotos } from '../unsplash-api';

const Header = ({ searchWord, searchData }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        searchPhotos(keyword, 1, 20).then((result) => {
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
