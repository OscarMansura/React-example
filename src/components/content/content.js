import React from "react";

import './content.css';

function Content(props) {
    return (
      <div className="content" data-variant={props.variant} data-theme={props.theme}>
        <div className="content__box">
          <h2 className="content__title">{props.title}</h2>
          {props.description && <p className="content__text">{props.description}</p>}
        </div>
        {props.image && (<div>
          <img className="content__image" src={props.image} alt={props.title}/>
        </div>)}
      </div>
    )
}

export default Content;