// Task 1: take the user input 
var name =""
var age = 0
var course = ""


//task 2 build the file to store the data...

const fs = require("fs")
const { userInfo } = require("os")


function filemaking(name,age,course){
    fs.writeFile(name+".txt",`name: ${name} \n age:${age} \n course: ${course}`,err=>{
        if(!err){
            console.log("file done success")
        }
    })

}

fdata = {
    "name":userInfo
}

filemaking("bablubabmal",23,"fs")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   d =  readline.getPrompt()
//   myd = readline.setPrompt(d)
//   console.log(myd)
  readline.question('Who are you?', name => {
   
    // name = name;
    filemaking(name,23,"fs")
    readline.close();
  });




