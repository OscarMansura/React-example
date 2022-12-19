import React, { useEffect, useState } from "react";

import './challenge.css';

function Challenge() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => {
            setData(result);
        });
    }, []);

    return (
        <div className="challenge">
            <h1 className="challenge__head">Welcome to Challenge!</h1>
            {!data.length ? (
            <p className="challenge__text">Let's Start the Game</p>
            ) : (
            <div className="challenge__list">
                {data.map((item) => (
                <article key={item.id} className="challenge__article">
                    <a href="#" className="challenge__link">
                        <h2  className="challenge__title">{item.title}</h2>
                        <p className="challenge__description">{item.completed}</p>
                    </a>
                </article>
                ))}
            </div>
            )}
        </div>
    );
}

export default Challenge;