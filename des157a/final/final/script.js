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
        console.log(gameData.index);
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

    let firstTime = true;
    // Set up the Turn
    function setUpTurn(){
        if(firstTime) {
            game.innerHTML = `<p>${gameData.players[gameData.index]}'s Turn</p>`;
            firstTime = false;
        }
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        })

        // Help
        let opened = false;
        document.getElementById('help').addEventListener("click",function(){
            if(!opened){
                directions.className = "directions-overlay";
            }
            else{
                directions.className = "hidden";
                console.log('click')
            }
            opened = !opened;
        });

    }

    let rolling = false;
    let intervalObj;
    // Throwing the Dice
    function throwDice(){
        if(rolling) {
            clearInterval(intervalObj);
            game.innerHTML += `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            // Add the Selection Statements
            // if two 1's are rolled...
            if (gameData.rollSum === 2){
                game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
                gameData.score[gameData.index] = 0;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                // Show the current score
                badSound.play();
                setTimeout(setUpTurn, 2000);
            }
            // if either die is a 1...
            else if (gameData.roll1 === 1 || gameData.roll2 === 1){
                // switch player
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                badSound.play();
                setTimeout(setUpTurn, 2000);
            }
            // if neither die is a 1...
            else {
                gameData.score[gameData.index] += gameData.rollSum;
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
                gameData.roll1 = Math.floor(Math.random() * 6) + 1;
                gameData.roll2 = Math.floor(Math.random() * 6) + 1;
                game.innerHTML = `<img  id="dice-left" src="${gameData.dice[gameData.roll1-1]}"><img id="dice-right" src="${gameData.dice[gameData.roll2-1]}">`;
                gameData.rollSum = gameData.roll1 + gameData.roll2;

            }, 200);
        }
        rolling = !rolling;
        
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
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