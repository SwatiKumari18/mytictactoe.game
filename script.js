'use strict';

console.log("Welcome to  'MY TIC TAC TOE'")

let music = new Audio("background-music.mp3")
let turn = new Audio("ting.mp3")
let gameOver = new Audio("gameOver.mp3")
let currentTurn = "X";
let isgameover = false;


//Function to check turn
const changeTurn = ()=>{
    return currentTurn == "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = ()=>{ 

    const boxtext = document.getElementsByClassName("boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e=>{

        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
        boxtext[e[0]].innerText !== '')
        {
         document.getElementsByClassName("info")[0].innerText = boxtext[e[1]].innerText + " WON!!!";            
         isgameover = true;
         document.getElementsByClassName("imgbox")[0].style.display = "contents";
         gameOver.play();
        }




    })

}

//Game logic & pkaying all sound
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e =>{
    let boxtext = e.getElementsByClassName("boxtext")[0];
    e.addEventListener('click', ()=>{

        if (boxtext.innerText === '')
        {
         boxtext.innerText = currentTurn;
         currentTurn = changeTurn();
         turn.play();
         checkWin();
         if (!isgameover)
         {
            document.getElementsByClassName("info")[0].innerText = "TURN FOR " + currentTurn;
         }
        }
        
    }) 
})


//Function of the reset button
const reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    Array.from(boxes).forEach(e =>{
        let boxtext = e.getElementsByClassName("boxtext")[0];
        boxtext.innerText = '';
        
    })
    document.getElementsByClassName("info")[0].innerText = "TURN FOR X";     
    document.getElementsByClassName("imgbox")[0].style.display = "none";
    isgameover = false;
})