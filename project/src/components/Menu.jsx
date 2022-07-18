import React from 'react'

import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <div className='container'>
                <div className='header_content-inner'>
                    <nav className='menu'>
                        <ul>
                            <li>
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>О нас</Link>
                            </li>
                            <li>
                                <Link to={'/contacts'}>Контакты</Link>
                            </li>
                            <li>
                                <Link to={'/travels'}>Наши путешествия</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
