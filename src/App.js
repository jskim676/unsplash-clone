import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import Explain from './components/explain/explain';
import Header from './components/header/header';
import ImageGallery from './components/images/ImageGallery';
import ImageModal from './components/modal/imageModal';

Modal.setAppElement('#root');

function App() {
    const [receiveWord, setReceiveWord] = useState('');
    const [receiveTopic, setReceiveTopic] = useState('');
    const [receiveImgData, setReceiveImgData] = useState({});
    const [receiveModal, setReceiveModal] = useState(false);
    const [titleName, setTitleName] = useState('');

    const searchWordChange = (result) => {
        setReceiveWord(result);
        setReceiveTopic('');
        setTitleName(result);
    };

    const modalChange = (result) => {
        setReceiveModal(result);
    };

    const imageDataCheck = (result) => {
        setReceiveImgData(result);
    };

    const topicWordChange = (result) => {
        setReceiveTopic(result);
        setReceiveWord('');
        setTitleName(result);
    };

    return (
        <div className="App">
            <Header searchWord={searchWordChange} topicWord={topicWordChange} />
            <main>
                <Explain title={titleName} />
                <ImageGallery
                    search={receiveWord}
                    topic={receiveTopic}
                    modalSwitch={modalChange}
                    selectImgData={imageDataCheck}
                />
                <ImageModal
                    isOpen={receiveModal}
                    closeModal={() => setReceiveModal(false)}
                    imgModalData={receiveImgData}
                />
            </main>
        </div>
    );
}

export default App;
