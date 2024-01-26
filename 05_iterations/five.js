const coding = ["js", "ruby","java", "pythan", "cpp"]


// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// })


// function printMe(arr) {
//     console.log(arr)
// }

// coding.forEach(printMe)
// *** in the method we can print [item, index and arr] ***
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "pythan",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) =>{
    console.log(item.languageName)
})