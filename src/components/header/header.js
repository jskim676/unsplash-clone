import React, { useState } from 'react';
import './header.css';
import Topics from './topic';

const Header = ({ searchWord, topicWord }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        searchWord(keyword);
    };

    const topicSearch = (result) => {
        topicWord(result);
    };

    return (
        <header>
            <nav>
                <img className="logo-icon" src="./unsplash.svg" alt="" />
                <div className="logo-text">Unsplash</div>
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
