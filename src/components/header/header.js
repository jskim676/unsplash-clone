import React, { useState } from 'react';
import './header.css';
import { searchPhotos } from '../unsplash-api';
import Topics from './topic';

const Header = ({ searchWord, searchData, topicWord }) => {
    const [keyword, setKeyword] = useState('');

    const searching = (data) => {
        searchPhotos(data, 1, 20).then((result) => {
            if (result.type === 'success') {
                const photo = result.response.results;
                searchWord(data);
                searchData(photo);
            }
        });
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searching(keyword);
    };

    const topicSearch = (result) => {
        topicWord(result);
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
                    <button>
                        <img src="/search-icon.svg" alt="" />
                    </button>
                </form>
            </nav>
            <Topics sendTopic={topicSearch} />
        </header>
    );
};

export default Header;
