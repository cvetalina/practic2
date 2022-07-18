import React from 'react'
import MenuNew from './MenuNew'

export default function footer() {
    return (
        <div className='footer'>
            Вернуться:
            <MenuNew menu={["About", "Contacts", "Travels"]} />
        </div>
    )
}
