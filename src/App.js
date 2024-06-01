import React, { useState } from 'react';
import './App.css';
import Explain from './components/explain/explain';
import Header from './components/header/header';
import ImageGallery from './components/images/ImageGallery';
import ImageModal from './components/modal/imageModal';

function App() {
    const [receiveWord, setReceiveWord] = useState('');
    const [receiveData, setReceiveData] = useState('');
    const [receiveImgData, setReceiveImgData] = useState({});
    const [receiveModal, setReceiveModal] = useState(false);

    const searchWordChange = (result) => {
        setReceiveWord(result);
    };

    const searchDataChange = (result) => {
        setReceiveData(result);
    };

    const modalChange = (result) => {
        setReceiveModal(result);
    };

    const imageDataCheck = (result) => {
        setReceiveImgData(result);
    };

    return (
        <div className="App">
            <Header searchWord={searchWordChange} searchData={searchDataChange} />
            <Explain title={receiveWord} />
            <ImageGallery images={receiveData} modalSwitch={modalChange} imgData={imageDataCheck} />
            <ImageModal isOpen={receiveModal} closeModal={() => setReceiveModal(false)} imgModalData={receiveImgData} />
        </div>
    );
}

export default App;
