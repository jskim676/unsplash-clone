import React, { useState } from 'react';
import './App.css';
import Explain from './components/explain/explain';
import Header from './components/header/header';

function App() {
    const [receiveWord, setReceiveWord] = useState('');

    const searchWordChange = (result) => {
        setReceiveWord(result);
    };

    return (
        <div className="App">
            <Header searchWord={searchWordChange} />
            <Explain title={receiveWord} />
        </div>
    );
}

export default App;
