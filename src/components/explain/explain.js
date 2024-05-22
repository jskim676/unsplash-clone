import React from 'react';
import './explain.css';

const Explain = ({ title }) => {
    return <section className="explain">{title ? <h1>{title}</h1> : <h1>Unsplash Clone</h1>}</section>;
};

export default Explain;
