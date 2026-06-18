const name = "karan"
const repoCount = 50
//console.log(name + repoCount + "value")
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//Hello my name is karan and my repo count is 50

const gameName = new String('hitesh-hi') //. now it is a Object
//console.log(gameName[0]);// access 0 key value===h 
//console.log(gameName.__proto__); //object //{}
//console.log(gameName.length);//6
//console.log(gameName.toUpperCase()); // HITESH

console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4) // 4 is not include
console.log(newString) // hite

const anotherString = gameName.slice(-3, -1) //-h
console.log(anotherString)

const newStringOne = " hitesh "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "http://karan.com/karan%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false
console.log(url.includes('karan')) // true

console.log(gameName.split("", 4)) // split(separator,limit) [ 'h', 'i', 't', 'e' ]
