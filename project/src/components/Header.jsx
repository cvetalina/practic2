import React from 'react'
import Menu from './Menu'

export default function Header() {
    return (
        <div className='header'>
            <div className='header_top'>
                <div className='container'>
                    <a className='header__btn'>BASHKORTOSTAN TRAVEL</a>
                    <a className='header__email'> info@bashktour.ru</a>
                    <a className='header__phone' href="tel:+78005553535">+7(800)555-35-35</a>
                </div>
            </div>
            <div>
                < Menu />
            </div>
        </div>

    )
}
