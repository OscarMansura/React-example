import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

function Nav() {
    return (
        <header className='header'>
            <img src="https://placeimg.com/100/50/any" alt="" />
            <nav className='nav'>
                <ul className='nav__title'>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/">Home</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/seguranca-mb-way">Segurança</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/challenge-mb-way">Challenge</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/novidades-mb-way">Novidades</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/faqs-mb-way">Faqs</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/pizza">Pizza</Link>
                    </li>
                    <li className='nav__list'>
                    <Link className='nav__link' to="/apple">Apple</Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Nav;
