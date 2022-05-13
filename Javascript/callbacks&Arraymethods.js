let arr = [1, 2, 3, 4, 5, 6];

// for each

arr.forEach(function (a) {
    console.log(a)
})

let objArr = [{
    letter: "a", num: 1
}, {
    letter: "b", num: 2
}, {
    letter: "c", num: 3
}]
objArr.forEach(function (n) {
    console.log(`${n.letter} and ${n.num}`)
})

// maping

arr.map((f) => {
    console.log(f)
});
const a = objArr.map((f) => {
    return f.letter;
})
console.log(a);

// arrow functions

let arrow = (x, y) => {
    return x + y;
}
console.log(arrow(4, 8));

//implecit return

let imp = (num, num1) => (
    num * num1
)
console.log(imp(10, 10))

arr.map(f =>
    console.log(f)
);
arr.map(f => (
    console.log(f)
));

setTimeout(() => {
    console.log('Hey')
}, 3000)
console.log('Welcome!')

const id = setInterval(() => {
    console.log('Time')
}, 3000);
clearInterval(id);

// filter

let arrfilter = arr.filter(m => (
    m % 2 == 1
))
console.log(arrfilter);

console.log(arrfilter.filter(n => n > 1))

// every/

console.log(arr.every(m => m > 1))

// some 

console.log(arr.some(m => m > 1))

// reduce

console.log(arr.reduce((total, num) => total + num));
