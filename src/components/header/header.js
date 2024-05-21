import React from 'react';
import './header.css';

const Header = () => {
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
