/*
const score = 400;
console.log(typeof score)
const newScore = new Number(100)
console.log(typeof newScore)
console.log(newScore.toFixed(2))

const other = 123.8976
console.log(other.toPrecision(3)) //124 precision with first three number

console.log(other.toPrecision(4))
// precision till 4 number
console.log(other.toPrecision(5)) // 123.90
*/
//const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'))// indian style1,00,000
// by default give us style

//-----------maths-------------//
/*
console.log(Math.ceil(4.2))// 5 take a upper value
console.log(Math.floor(4.9))//4 
console.log(Math.min(4, 5, 6, 7))//4
console.log(Math.max(8, 9, 3, 4))//9
*/
console.log(Math.random()) // random give random value  0 .1 to 0.9
console.log(Math.floor(Math.random() * 10) + 1)
//min random value is 1 and max is 10
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// min random value is 10 and max is 19