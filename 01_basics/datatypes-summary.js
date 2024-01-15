// Primimtive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100           // typeof number
const scoreValue = 100.3   // typeof number

const isLoggedIn = false  // typeof boolean
const outsideTemp = null   // typeof object
let  userEmail;           // typeof undefined

const  id = Symbol("123")  // typeof symbol
const anotherId = Symbol("123")  // typeof symbol
//  console.log(id == anotherId)

const bigNumber = 303930944454909n // typof bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // typeof object
let myObj = {
    name: "Sahul",   // typeof object
    age:24,
    
}

const myFunction = function(){}  // typeof function

// console.log(typeof myFunction)  


//   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//  Stack (Primitive), Heap (Non-Primitive)

let myPet = "Goat"

let anotherpet = myPet
anotherpet = "Camel"

// console.log(myPet)
// console.log(anotherpet)

let userOne = {
    email:"user@google.com",
    upi: "user@pQs"
}

let useTwo = userOne

useTwo.email = "sahul@Yohoo.com"

console.log(userOne.email)
console.log(useTwo.email)
