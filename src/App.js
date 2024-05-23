import React, { useState } from 'react';
import './App.css';
import Explain from './components/explain/explain';
import Header from './components/header/header';
import ImageGallery from './components/images/ImageGallery';

function App() {
    const [receiveWord, setReceiveWord] = useState('');
    const [receiveData, setReceiveData] = useState('');

    const searchWordChange = (result) => {
        setReceiveWord(result);
    };

    const searchDataChange = (result) => {
        setReceiveData(result);
    };

    return (
        <div className="App">
            <Header searchWord={searchWordChange} searchData={searchDataChange} />
            <Explain title={receiveWord} />
            <ImageGallery images={receiveData} />
        </div>
    );
}

export default App;
