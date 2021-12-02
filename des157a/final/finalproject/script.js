(function (){
    'use strict';
    console.log("reading js");
    
    // Add Variables for DOM Elements
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const actionArea = document.getElementById('actions');
    const score = document.getElementById('score');
    const goodSound = new Audio('media/roll.mp3');
    const badSound = new Audio('media/pass.mp3');
    const nav = document.querySelector("nav");
    const directions = document.getElementById("directions");
    const footer = document.querySelector("footer");
    let currentRoll1 = 0;
    let currentRoll2 = 0;

    // Keeping Track of Game Data
    const gameData = {
        dice: ['./images/1die.png', './images/2die.png', './images/3die.png', './images/4die.png', './images/5die.png', './images/6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // Start Game!
    startGame.addEventListener("click", function(){
        // randomly set game index here ...
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);
        gameControl.innerHTML = '<button id="quit">Quit</button><button id="help">Help</button>';

        // add event listener for the new button
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        nav.className = "show";
        directions.className = "hidden";
        footer.className = "hidden";
        setUpTurn();
    });

    function updateTurn(){
        if(gameData.index === 0){
            document.getElementById('p1-score').style.backgroundColor = 'black';
            document.getElementById('p2-score').style.backgroundColor = 'transparent';
        }
        else{
            document.getElementById('p2-score').style.backgroundColor = 'black';
            document.getElementById('p1-score').style.backgroundColor = 'transparent';
        }
    }

    // Set up the Turn
    function setUpTurn(){
        // game.innerHTML = `<p>${gameData.players[gameData.index]}'s Turn</p>`;
        updateTurn();

        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });

        // Help
        let opened = false;
        document.getElementById('help').addEventListener("click",function(){
            if(!opened){
                directions.className = "directions-overlay";
                game.className = "hidden";
                actionArea.className = "hidden";
            }
            else{
                directions.className = "hidden";
                game.className = "";
                actionArea.className = "";
                // console.log('click')
            }
            opened = !opened;
        });

    }

    let rolling = false;
    let intervalObj;
    // Throwing the Dice
    function throwDice(){
        // updateTurn();
        if(rolling) {
            clearInterval(intervalObj);
            // game.innerHTML += `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            // actionArea.innerHTML = '<button id="roll">Stop</button>';
            // Add the Selection Statements
            // if two 1's are rolled...
            if (gameData.rollSum === 2){
                game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                updateTurn();
                // Show the current score
                badSound.play();
                setTimeout(setUpTurn, 2000);
            }
            // if either die is a 1...
            else if (gameData.roll1 === 1 || gameData.roll2 === 1){
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                updateTurn();
                badSound.play();
                setTimeout(setUpTurn, 2000);
            }
            // if neither die is a 1...
            else {
                gameData.score[gameData.index] += gameData.rollSum;
                updateTurn();
                goodSound.play();
                actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function(){
                    throwDice();
                });

                document.getElementById('pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                });

                // check winning condition!
                checkWinningCondition();
            }
        } else {
            // actionArea.innerHTML = '';
            intervalObj = setInterval(function() {
                if(currentRoll1 === gameData.roll1){
                    while(currentRoll1 === gameData.roll1){
                        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
                        // console.log(`${currentRoll1} ${gameData.roll1}`);
                    }
                    currentRoll1 = gameData.roll1;
                }
                else{
                    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
                    currentRoll1 = gameData.roll1;
                }
                if(currentRoll2 === gameData.roll2){
                    while(currentRoll2 === gameData.roll2){
                        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
                    }
                    currentRoll2 = gameData.roll2;
                }
                else{
                    gameData.roll2 = Math.floor(Math.random() * 6) + 1;
                    currentRoll2 = gameData.roll2;
                }
                game.innerHTML = `<img  id="dice-left" src="${gameData.dice[gameData.roll1-1]}"><img id="dice-right" src="${gameData.dice[gameData.roll2-1]}">`;
                gameData.rollSum = gameData.roll1 + gameData.roll2;
            }, 100);
        }
        rolling = !rolling;
        updateTurn();
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            if(gameData.index === 0){
                document.getElementById('p1-score').innerText = `Player 1: ${gameData.score[gameData.index]}`;
            }
            else{
                document.getElementById('p2-score').innerText = `Player 2: ${gameData.score[gameData.index]}`;
            }
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else {
            // show current score
            nav.innerHTML = 
            `<div id="p1-score"> ${gameData.players[0]}: ${gameData.score[0]} </div> 
             <div id="p2-score"> ${gameData.players[1]}: ${gameData.score[1]} </div>`;
        }
    }
})();