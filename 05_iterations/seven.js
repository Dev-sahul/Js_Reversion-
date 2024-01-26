const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num) => num +2)
console.log(newNums)
const nestedNums = myNumbers.map((num) =>{
    return num *2
})
.map((num)=> num + 3)
.filter((num) => num >= 16)
console.log(nestedNums)