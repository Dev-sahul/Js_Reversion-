const userEmail = "Sahul.ai"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

// falsy values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values :- "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("oject is empty")
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  // in this case its return first value
// val1 = null ?? 23   // we use it to prevent getting null value 
// val1 = undefined ?? 39 // undefined value
// val1 = null ?? 10 ?? 20
val1 = 34 ?? 45


console.log(val1) 

// *** Terniary Operator ***

// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80"): console.log("more than 80")