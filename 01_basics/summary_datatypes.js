// ----primitive dsts types-----
//1.bigInt
//2.string
//3.number
// 4.symbol
//5.boolean => true,false 


// key features:uniqueness
// everyone symbol is unique,even if they have same. description

//const id = Symbol('123')
//const anotherId = Symbol('123')

//console.log(id === anotherId) // false


// using symbol as Object Keys
// Symbol are often used to avaoid property name conflicts 
const _id = Symbol("_id");

const user = {
    name: "John",
    [_id]: 101
};

console.log(user[_id]); // 101
// -------refernces (Non primitive)---------

// array,Objects,Function 
// non primitive datatype is object 

//const heros = ["shaktiman", "krishna", "doga"] // array

//object
//let myObject = {
//    name: "kakran",
//   age: 22,

//}
//console.log(myObject.name) // kakra
//console.log(heros[0])// shaktiman 

// functions

//const login = function () {
//console.log("login successfully")

//}

//console.log(typeof heros) // object
//console.log(typeof login) // function object