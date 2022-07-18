import React from 'react'

function init() {
    let map = new ymaps.Map('map', {
        center: [55.71685856902568,37.613062999999975],
        zoom: 10
    });
}

ymaps.ready(init);

