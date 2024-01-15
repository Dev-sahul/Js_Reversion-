// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log('2' > 1);
// console.log("02" > 1);

console.log(null > 0);    // The reason is that an equality check ==  and comparisons >< >=
console.log(null == 0);   // <= work differentily.
console.log(null >= 0);  // Comparisons convert null to a number. treating it as 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===
console.log("2" === 2)