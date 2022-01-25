// add the IIFE, 'use strict'; and the rest of the script here
(function(){
    'use strict';
    
    // Declaration
    let globalData;
    const one = document.querySelector('#key-1');
    const two = document.querySelector('#key-2');
    const three = document.querySelector('#key-3');
    const four = document.querySelector('#key-4');
    const five = document.querySelector('#key-5');
    const six = document.querySelector('#key-6');
    const seven = document.querySelector('#key-7');
    const eight = document.querySelector('#key-8');
    const wpm = document.querySelector('#wpm');
    const cpm = document.querySelector('#cpm');
    const pct = document.querySelector('#pct');

    // Setup
    async function getData(){
        const type = await fetch('data/data.json');
        const data = await type.json();
        globalData = data;
        const wpmValue = `<p id="wpm">WPM: ${data.one.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${data.one.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${data.one.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    }

    // Onclick
    one.addEventListener('click', function(){
        const wpmValue = `<p id="wpm">WPM: ${globalData.one.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.one.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.one.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    two.addEventListener('click', function(){
        const wpmValue = `<p id="wpm">WPM: ${globalData.two.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.two.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.two.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    three.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.three.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.three.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.three.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    four.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.four.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.four.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.four.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    five.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.five.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.five.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.five.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    six.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.six.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.six.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.six.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    seven.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.seven.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.seven.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.seven.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });
    eight.addEventListener('click', function(){
        console.log('populated');
        const wpmValue = `<p id="wpm">WPM: ${globalData.eight.wpm}</p>`;
        const cpmValue = `<p id="cpm">CPM: ${globalData.eight.cpm}</p>`;
        const pctValue = `<p id="pct">Top ${globalData.eight.percentage}%</p>`;
        wpm.innerHTML = wpmValue;
        cpm.innerHTML = cpmValue;
        pct.innerHTML = pctValue;
    });

    // Function Call
    getData();
})();