import React, {useState} from 'react';

import './features.css';

import { FEATURES_DATA } from '../../mocks/featuresArray';

function Features(props) {
  const [id, setId] = useState('4');

  return (
    <div>
      <h2>Explore as funcionalidades MB WAY</h2>
      <ul className="features" id={props.id}>

        {FEATURES_DATA.map((feat) => (
          <li className="features__item" key={feat.id}>
            <button 
              onClick={() => {
                setId(feat.id);
              }} 
              className={'features__button ' + (feat.id === id && 'features__button--active')}>
              <img className="features__image" src={feat.src} alt={feat.title} />
              <span className="features__label">{feat.title}</span>
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Features;
