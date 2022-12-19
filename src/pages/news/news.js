import React, { useEffect, useState } from "react";

import './news.css';

// API fetch/then
function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {
            setData(result);
        });
}, []);

    return (
        <div className="news">
            <h1 className="news__headline">Welcome to News</h1>
            {!data.length ? (
            <p className="news__loading">Loading data...</p>
            ) : (
            <div className="news__list">
               {data.map((item) => (
                <article key={item.id} className="news__article">
                    <a className="news__link" href="#nowhere">
                    <h2 className="news__title">{item.title}</h2>
                    <p className="news__description">{item.body}</p>
                    </a>
                </article>
                ))}
            </div>
        )}
        </div>
    );
}

export default News;