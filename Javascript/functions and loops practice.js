/*

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}*/



// For of loop
// const seatingChart = [
//     ['kristen', 'erik', 'namita'],
//     ['yuma', 'serik', 'yamita'],
//     ['risten', 'rik', 'amita']
// ]



// for (let row of seatingChart){
//     for(let student of row){
//         console.log(student);

//     }
// }

// row = seatingChart
//student=row
//print student


//passing multiple documents
// function repeat(str, numTimes) {
//     let result = ' ';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result)
// }

// function rant(woop){
//     console.log((`rant ${"i hate beets"}`).toUpperCase());
//    console.log((`rant ${"i hate beets"}`).toUpperCase());
//  console.log((`rant ${"i hate beets"}`).toUpperCase());
// }
// rant();

// const creature = "Common Sea Dragon";

// function scubaDive(){
//     const creature = "Spanish Dancer"; //A type of sea slug
//     console.log(creature);
// }

// scubaDive();

// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// // Write your code here
// const firstNames = fullNames.map(function (n)= {
//     return n.first
// })

// const arr = [1, 2, 3, 4, 5, 6, 7]
// const newArr = arr.filter(num => num > 3)
// console.log(newArr);

const add = (x, y) => {
    return x + y;
}

const square = x => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

array.filter(n => {
    return n < 10
})//main browser console

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id);