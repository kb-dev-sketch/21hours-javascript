const mydate = new Date();

console.log(mydate.toString())//Fri Jun 19 2026 08:15:15 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleString())//6/19/2026, 8:15:15 AM
console.log(mydate.toDateString())//Fri Jun 19 2026

//let myCreatedDate = new Date(2023, 11, 2, 26, 8, 89)//Sun Dec 24 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
//Sat Dec 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
// month start from jan 0 to 11 jan to dec
//console.log(myCreatedDate.toString());
// yy-mm-date in this minth start from 1

let mycreatedDate = new Date("2025-01-25")
console.log(mycreatedDate.toString())