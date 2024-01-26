const myOject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myOject) {
console.log(`${key} shortcut is for ${myOject[key]}`)
    
    
}

// *** for in only return value ***
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key])
}


// *** we can't iterate map using for in loop ***
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America') 
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in map) {
   console.log(key)
}