// import { Menu } from '@mui/material'
import React from 'react'
import Menu from './Menu'

export default function Header() {
    return (
        <div className='header'>
            <div className='header_top'>
                <div className='container'>
                    <a className='header__btn'>BASHKORTOSTAN TRAVEL</a>
                    <a className='header__email'> bashktour@mail.ru</a>
                    {/* <a className='header__phone' href="tel:+79279534399">+7(927)953-43-99</a> */}
                </div>
            </div>
            <div>
                < Menu />
            </div>
        </div>

    )
}
