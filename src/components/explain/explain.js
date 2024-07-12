import React from 'react';
import './explain.css';

const Explain = ({ title }) => {
    return <section className="explain">{title ? <h1>{title}</h1> : <h1>Unsplash</h1>}</section>;
};

export default Explain;
