const myArr = [2, 3, 4, 5, 6]
//console.log(myArr)
//console.log(typeof myArr)// object 
// kyonki javascript array ko object ki tarah store karta hai 
// in key value key:index value:values
//const myArr2 = new Array(1, 2, 3, 4,)
//console.log(myArr2[3])
//console.log(typeof myArr2)

//------ARRAY METHODS--------//
//const myArr3 = myArr.push(9.440, "karan")
//[ 2, 3, 4, 5, 6, 9.44, 'karan' ]
//console.log(myArr)// existing array ko modify karta hu
//console.log(myArr3) // push new length return karta hai

//const myarray2 = myArr.pop()
//console.log(myArr)// new modified array
//console.log(myarray2) //pop delete last element
// give that number

// result = myArr.shift();
// array ka first element remove karta hai 
//or removed element return karta hai
//console.log(result)
//console.log(myArr)

//const result = myArr.unshift(10)
//console.log(result)//return new length 
//console.log(myArr) //modified array //[ 10, 2, 3, 4, 5, 6 ]

//console.log(myArr.includes(45))// FALSE

//console.log(myArr.indexOf(3))//2

///console.log(myArr)
/*
const newArr = myArr.join() // join convert the array in string
console.log(newArr);
console.log(typeof newArr)
*/

const myn1 = myArr.slice(0, 3)// start from 0 but does not include 3
// does not modify parent array but splice do
console.log(myn1)//[3,4]
console.log(myArr)

//---------splice---------//
const myn2 = myArr.splice(1, 3)
console.log(myn2)//[3,4,5]
console.log(myArr) //left parant array[2,6]

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", 'batman']
/*marvel_heros.push(dc_heros)


console.log(marvel_heros)
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);//flash
*/
//------concat------ Array ko merge karta hai
//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//---spread operator--element ko unpackkart ahai ,merge/copy
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)

//-------flat---Nested arrays ko flatten karta hai
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
//
//[
// 1, 2, 3, 4, 5,
// 6, 7, 6, 7, 4,
//  5
//]

// ---- check array or not //
console.log(Array.isArray("hitesh"))//false
console.log(Array.from("Hitesh"))
//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.isArray(myArr))//true

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))