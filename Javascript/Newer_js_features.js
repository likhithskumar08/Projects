function action(person_name, origin = 'india') {
    console.log(`${person_name} is from ${origin}`)
}
action("Jefrey", "spain")
action("Leonal")

const nums = [1, 2, 3, 4, 5, 6]
const numss = [7, 8, 9]
console.log(nums)
console.log(...nums)

console.log(..."species")

console.log(...nums, ...numss);

const numbers = [...nums, ...numss]

const cat = { color: 'white', tail: 'thin' }
const dog = { color: 'brown', hair: 'thick' }

const animal = { ...cat, ...dog }
console.log(animal)

console.log({ ...[1, 2, 3, 4, 5] })

console.log({ ..."this" })
function defaultParams(a, b, ...num) {
    console.log(a);
    console.log(b)
    console.log('thanks ' + num)
}
defaultParams(1, 2, 3, 4, 5, 6, 7)

const [one, two, three, ...everything] = nums;
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
    get() {
        console.log(`the name is ${this.name} and the adress is ${this.state}`)
    }
}
const { name: suhesh, ...all } = restaurant;
const { Species = "Man" } = restaurant;
console.log(restaurant)


