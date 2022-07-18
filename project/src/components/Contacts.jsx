import React from 'react'


export default function Contacts() {
    return (
        <div>
            <div className='bg'>
                <div className='pages-title'>
                    Контакты
                </div>
            </div>
            <div className='wrapper'>
                <div className='title'>
                    BASHKORTOSTAN TRAVEL
                </div>
                <div className='mid-title-text'>
                    Мы находимся по адресу:
                </div>
                <div className=''>
                    115162, г. Москва, ул. Шухова, д. 14
                </div>
                <div className='mid-title-text'>
                    Телефон:
                </div>
                <a href="tel:+78005553535">+7(800)555-35-35</a>
                <div className='mid-title-text'>
                    Почта:
                </div>
                <div className='description'>info@bashktour.ru</div>
                <div className='mid-title-text'>
                    Агенствам:
                </div>
                <div className='description'>agent@bashktour.ru</div>
                <div className='mid-title-text'>
                    Часы работы:
                </div>
                <li>Понедельник - Пятница: с 10:00 до 19:00</li>
                <li>Прием заявок с сайта - круглосуточно</li>
            </div>
        </div>
    )
}
