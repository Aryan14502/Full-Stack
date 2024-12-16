let reg1 = /hello/g ; 
let reg2 = /hello/i ; 
let reg3 = /hello/m ; 

let str = "Welcome to Coding Ninjas" ;
let reg11 = /Ninjas/ ;
console.log( reg11.exec(str) );

let reg = /Ninjas/ ;
console.log(reg.test(str)) ; // Returns true
console.log(str.search(reg));
 
reg = /hello/ ;
console.log(reg.test(str)) ; //Returns false
console.log(str.search(reg));

var str1 = "WELCOME TO CODING NINJAS" ;
var reg111 = /coding/i ;
str.replace(reg111,"Programming");
console.log(str1)

let str2 = "Welcome to Coding Ninjas"
const reg22 = /[\s,]+/ ;
let res = str.split(reg22) ;
console.log(res);
 