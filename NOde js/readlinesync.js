const readline = require("readline-sync");
const fs = require("fs")
console.log("Enter input : ")
// Taking a number input
// let num = Number(readline.question());
// let number = [];
// for (let i = 0; i < num; i++) {
//       number.push(readline.question());
// }
let name = readline.question("Name please")
let age = Number(readline.question("What is you Age"))
let course = readline.question("/Couese please:")
function filemaking(name,age,course){
    fs.writeFile(name+".txt",`name: ${name} \n age:${age} \n course: ${course}`,err=>{
        if(!err){
            console.log("file done success")
        }
    })

}

filemaking(name,age,course)
// console.log(number);