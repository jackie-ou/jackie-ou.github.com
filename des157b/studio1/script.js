// add the IIFE, 'use strict'; and the rest of the script here
(function(){
    'use strict';
    const myVideo = document.querySelector('#myVideo');
    const playToggle = document.querySelector('.fa-play');
    const volToggle = document.querySelector('.fa-volume-up');
    const volLevel = document.querySelector('#volumeLevel');
    const sourceMP4 = document.querySelector('#mp4');
    const sourceWEBM = document.querySelector('#webm'); 
    let playing = false;
    let eng = false;

    playToggle.addEventListener('click', function(){
        if(!playing){
            myVideo.play();
            playToggle.className = 'fa-solid fa-pause';
        } else {
            myVideo.pause();
            playToggle.className = 'fa-solid fa-play';
        }
        playing = !playing;
    })

    volToggle.addEventListener('click',function(){
        if (volToggle.className === 'fas fa-volume-up'){
            volToggle.className = 'fas fa-volume-mute';
            myVideo.muted = true;
        } else {
            volToggle.className = 'fas fa-volume-up';
            myVideo.muted = false;
        }
    })

    volLevel.addEventListener('click', function(){
        // call another function so we can send an argument
        changeVolume(volLevel.value);
    })

    function changeVolume(value){
        myVideo.volume = value / 100;
        console.log('volume is ' + myVideo.volume);
    }

    document.addEventListener('keyup', event => {
        if (event.code === 'Space'){
            swapLanguage();
        }
    })

    function swapLanguage(){
        let time = myVideo.currentTime;
        if(!eng){
            sourceWEBM.setAttribute('src', 'media/ENG.webm');
            sourceMP4.setAttribute('src', 'media/ENG.mp4');
            myVideo.load();
            myVideo.currentTime = time;
            myVideo.play();
            console.log('swapped to eng');
        } else {
            sourceWEBM.setAttribute('src', 'media/JPN.webm');
            sourceMP4.setAttribute('src', 'media/JPN.mp4');
            myVideo.load();
            myVideo.currentTime = time;
            myVideo.play();
            console.log('swapped to jpn');
        }
        eng = !eng;
    }

})();