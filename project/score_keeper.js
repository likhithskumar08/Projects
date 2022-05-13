const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const resetbutton = document.querySelector('#resetbutton');
const winningScoreSelect = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let winningScore = 3;
//boolean 
let isGameOver = false;


p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');

            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1display.textContent = p1score;
    }
})

p2button.addEventListener('click', function () {
    if (!isGameOver) {   // boolean already declared//
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
            p1display.classList.add('winner');// creating winner and loser so that the number color can be changed
            p2display.classList.add('loser');

            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2display.textContent = p2score;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);// parseInt is used parse only the integer.
    // reset();//to select the winning score using this keyword
})

resetbutton.addEventListener('click', reset);// calling reset not but not as a function 

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'loser');// to remove color
    p2display.classList.remove('winner', 'loser');// to remove color
    p1button.disabled = false;
    p2button.disabled = false;
}// creating separate function for reset so that it can be used in p1score, p2score, and changing value and color of numbers

