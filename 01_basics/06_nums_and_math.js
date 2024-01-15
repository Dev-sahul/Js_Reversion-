const score = 400;

// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString())

//################# Maths #################

// console.log(Math);
// console.log(Math.abs(-5)) // it remove negetive sign
// console.log(Math.round(4.5))
// console.log(Math.ceil(6.2)) // its make alway high round value
// console.log(Math.floor(6.9))  // its make alway low round value

// console.log(Math.min(4, 8, 10, 6))
// console.log(Math.max(4, 8, 10, 6))

console.log(Math.random()  )   // its return 0 to 1 decemal value
console.log(Math.random() * 10 + 1) // + 1 to make sure that we wann't get 0
console.log((Math.random() * 10) + 1)  // to avoid bottom_mass calculation
console.log(Math.floor(Math.random()*10) + 1); 

const min = 5 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)