// *** for of ***

const arr = [1, 2,3,4,5]
for(const num of arr){
    // console.log(num)
}
const str = "sahulPaswan"
for (const myStr of str) {
    // console.log(myStr)
    
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America') 
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map)

for (const [key, value] of map) {
    // console.log(key , ':-', value)
    
}

const myGame = {
   game1: 'Batman',
   game2: 'spaderman'

}
for (const [key, value] of myGame) {
    // console.log(key, ':', value)   we can't iterate through object
    
}