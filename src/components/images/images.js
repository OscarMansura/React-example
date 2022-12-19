import React from 'react';

import './images.css';

function Images() {
    return (
        <div className='images__flex'>
            <div className='image__first'>
                <h1 className='image__title'>No telemóvel</h1>
                <img className='image__img' src="https://placeimg.com/600/400/arch" alt="" />
            </div>
            <div className='image__second'>
                <h1 className='image__title'>No MULTIBANCO</h1>
                <img className='image__img'src="https://placeimg.com/600/400/arch" alt="" />
            </div>
        </div>
    )
}

export default Images;