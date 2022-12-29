



const fs = require('fs')

// fs.readFile("demo1.txt",(err,data)=>{
//     if(err){
//         console.log("file coont be reead",err)
//     }
//     else{
//         console.log(data.toString())
//     }
//     console.log("file read success")
// })

// let dat = fs.writeFileSync("myfile.txt"," name is bablu", { flag: 'a+' })
// console.log(dat)
console.log("hi")
let data = fs.readFileSync("myfile.txt")
console.log(data.toString())
console.log("bye")

// fs.unlink("myfile.txt",(err)=>{
//     if(err){
//         console.log("file cannot be deleted ",err)
//     }else
//     console.log("file deleted success")
// })



