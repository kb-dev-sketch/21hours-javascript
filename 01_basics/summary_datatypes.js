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

//------- memories ----------//

// stack ,heap

// stack =>>>>> used in primitive data type

// heap =>>>>> used in non primitive data types 

// stack 
let myYoutubename = "king" // primitive type is stored in the stack
let anotherName = myYoutubename// a copy of the value is created in the stack
anotherName = "karan"// changing the copy does not afffect the original
console.log(myYoutubename)// king (original value is remai same)
console.log(anotherName)// karan (only copy value is changed)
///heap
let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "ayush@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com

// Variables that refernces the same Object share the same location in memory ,
// so change to in variable affect the other