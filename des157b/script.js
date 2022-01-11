(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const header1 = document.querySelector('h1');
    const header2 = document.querySelector('h2');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            banner.innerHTML = '<img src="images/desktop.png" alt="desktop.png"> <img src="images/keyboard.png" alt="keyboard.png">';
            button.className = 'switch';
            button.innerHTML = button.innerHTML.toLowerCase();
            header1.className = 'switch';
            header1.innerHTML = header1.innerHTML.toLowerCase();
            header2.className = 'switch';
            header2.innerHTML = header2.innerHTML.toLowerCase();
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            banner.innerHTML = '<img src="images/guitar.png" alt="guitar.png"> <img src="images/piano.png" alt="piano.png">';
            button.removeAttribute('class');
            button.innerHTML = button.innerHTML.toUpperCase();
            header1.removeAttribute('class');
            header2.removeAttribute('class');
            header1.innerHTML = header1.innerHTML.toUpperCase();
            header2.innerHTML = header2.innerHTML.toUpperCase();
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()