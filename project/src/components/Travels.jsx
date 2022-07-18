import React, { useState } from 'react'

import Button from '@mui/material/Button';

export default function Travels() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
    }

    return (
        <div className=''>
            <div className='bg'>
                <div className='pages-title'>
                    Наши путешествия
                </div>
            </div>
            <div className='wrapper'>
                    <p>Упс, тут пока пусто..... </p>
                <div>
                    <h1> Счетчик: {counter} </h1>
                    <Button variant="contained" onClick={increment}> Жмякай сюда </Button>
                </div>
            </div>
        </div>
    )
}
