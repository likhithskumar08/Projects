// var x = 10;
// var y = 15;
// console.log(x + y)

// let msg = `hello ${1 + 10 + 12}`
// console.log(msg)


// var qty = 10;
// console.log(qty)
// var product = 'artichoke';
// console.log(product)
// var price = 5;
// console.log(price)

// text = `you bought ${qty} ${product} with the price of ${price * qty}`;
// console.log(text)

//if statement

// console.log("math will work!")

// let random = Math.random();
// if (random < 0.5) {
//     console.log("your number is less then 0.5");
//     console.log(random);
// } else {
//     console.log("your number is greater then 0.5")
//     console.log(random);
// }

// if (random>=0.50){
// console.log("your number is greater then 0.5");
// console.log(random);
// }

// function isEven(num) {
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
//     if (num % 2 === 0) {
//         console.log("even");
//     }
//     //AND THIS LINE ↑↑↑↑↑
// }

// else if & else statement
// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHH I HATE MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfWeek === 'tuesdays') {
//     console.log("PRETTY DECENT TUESDAYS!.")
// } else {
//     console.log("MEH")
// }

// const age = 10;

// if (age <= 5) {
//     console.log("your age is under 5,you get in for free!")
// } else if (age < 10) {
//     console.log("your age is under 10, you pay 10$")
// } else if (age < 65) {
//     console.log("you are an adult, you must pay 20$")
// } else if (age > 65) {
//     console.log("you are an older person, you must pay 10$ ")
// }

//Nesting conditionals

// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf('') === -1) {
//         console.log("valid password")
//     } else {
//         console.log("Password cannot contain spaces!")
//     }

// } else {
//     console.log("password is too short!, week security")
// }


// truthy and falsy values:

// const userInput = prompt('Enter something!')

// if (userInput){
//     console.log('truthy!')
// }else{
//     console.log('falsy!')
// }

// if(NaN){
//     console.log("TRUTHY!")
// }else{
//     console.log("FALSY!")
// }

// and operator
// const password = prompt("enter your password!");

// if (password.length >= 5 && password.indexOf(' ') === -1) {
//     console.log("password is valid")
// } else {
//     console.log("password is invalid!")
// }

//OR operator: one part is true the whole becomes true

// const age = prompt("enter your age!").toUpperCase();


// if (age >= 0 && age <= 5 || age >= 65) {
//     console.log("you get in for free!")
// } else if (age >= 6 && age < 10) {
//     console.log(" you pay 10$")
// } else if (age >= 10 && age <= 65) {
//     console.log(" you must pay 20$")
// } else {
//     console.log("invalid age!")
// }

//Not logical operator: '!=='

// const age = prompt("enter your age!").toUpperCase();
// if (!(age >= 0 && age <= 5 || age >= 65)) {
//     console.log("yor are not a baby or a senior")
// }

//the switch statement
// const day = 6;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     default:
//         console.log("i don't know that!")
// }


//Arrays: push & pop, shift & unshift, slice & spice, concat & indexof, includes & reverse, multidimensional array

// let stuff = ['colors', 'timer', 'table', 'tools', 'leaderboard', 56, 784];
// console.log(stuff)
// console.log(stuff[1][0])
// console.log(stuff[3] = 'mechanics')
// console.log(stuff[8] = 'machinary')
// console.log(stuff.push('tim'))
// console.log(stuff.push('meridin', 'chakra'))//add elements to the very end
// console.log(stuff.pop(''))// remove one object at the very end
// console.log(stuff.unshift('Anderson')) // removes the element from the begining of an array
// console.log(stuff.unshift('Neo')) // neo is added as the 0 indexed elements. that is 1st element in an array
// let next_patron = stuff.shift();// the neo element will be removed and it won't show in array list
// console.log(next_patron) // above 2 lines of codes will be used to print the element which got removed

//concat concept

// let cats = ['tony', 'spidey', 'hulk'];
// let dogs = ['robin', 'tim', 'durand'];
// let animals = cats.concat(dogs);
// console.log(animals);

// //boorlean check of elements existance witin the array can be done by includes()

// console.log(animals.includes('robin'))
// console.log(animals.includes('suffero'))

// // index of ()

// console.log(animals.indexOf('tim'))

// //reverse
// console.log(animals.reverse())
// //
// console.log(animals.indexOf('spidey'))

//slice
/*let colors = ['red', 'brown', 'grey', 'yellow', 'sky blue', 'white'];
console.log(colors);

let slice_test = colors.slice(0, 4);
console.log(slice_test);


let slice1_test = colors.slice(3, 5);
console.log(slice1_test);

let number_slice = colors.slice(-1);
console.log(number_slice)*/

//Splice

// let colors = ['red', 'brown', 'grey', 'yellow', 'sky blue', 'white'];
// let splice_test = colors.splice(2, 5);
// console.log(splice_test); // gives output of the range that we have defined.
// console.log(colors.splice(0,3,'brownish-grey','reddish-brown'))

//Array.sort()
/*let scores = [1, 70, 100, 2500, 9, -12, 0, 34]
console.log(scores.sort())*/

//reference types and Equality testing : same elements won't be equal to each other. because each value is allocated
//different locations to each of the value.

// Arrays + const
/*
const nums = [1, 2, 3];
console.log(nums.push(4))
console.log(nums)
// if we define the same type of array with let the memory allocation will be diffrent, therefore it will never be equal.
//the Js would treat the array as different set because of diffrent memory allocation.

//Nested arrays: storing arrays inside arrays.
const gameBoard = [['x', 'o', 'x'], ['o', null, 'x'], ['o', 'o', 'x']]
console.log(gameBoard)
console.log(gameBoard[1][1]) //to access elements in an array.*/

// Objects
//Objects are collections of properties
// properties are key value pair
// rather than accessing data using an index, we use custom keys.

// creating object literals
/*
const person = { firstName: 'Mike', lastName: 'Jack' }
console.log(person)
//Accessing data out of objects
console.log(person["firstName"])
console.log(person.firstName)
//all keys are converted to a string
const years ={1999:'Good',2020:'Bad'}
console.log(years["1999"])*/

//Modifying objects

// const midterms = {danielle:95, thomas:78}
// console.log(midterms)
// let midterms_grade = midterms.danielle = 'c+'; look more into this topic

// Arrays+objects:
/*
const comments = [
    { username: 'tammy', text: 'lolololol', votes: '9' },
    { username: 'tamm', text: 'lololol', votes: '6' },
    { username: 'tam', text: 'lolol', votes: '3' }
]

console.log(comments)

console.log(comments[1].text)*/

// Repeating stuff with loops

/*FOR LOOPS
NESTED LOOPS
WHILE LOOPS
THE BREAK KEYWORD
FOR or of LOOP
iterating arrays
iterating objects*/

/*Intro for loops*/
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//1]initial expression, 2] condition 3] incrementExpression

// for (let i=1; i<=6; i++){
//     console.log("Da ba dee da ba daa");
// }

// for (let i = 25; i >= 0; i = i - 5) {
//     console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// Looping over arrays:
/*const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);// to loop over an array start from index 0 and continue looping to until last index(length-1)
}
*/

// for (i=animals.length-1; i>=0;i--){
//     console.log(animals[i])
// }
/*
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}*/

//FOR LOOP INSIDE ANOTHER FOR LOOP
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
    for (let j = 1; j < 4; j++){
        console.log(j)
    }
}*/

//the while loop
// var n = 0;
// var x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }

//the break keyword
/*
let i = 0;

while (i < 6) {
  if (i === 3) {
    break; //break keyword
  }
  i = i + 1;
}

console.log(i);*/
