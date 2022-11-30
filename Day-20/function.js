console.log("function in js")

/**
 * What is a function:
 * Group of some statements which executes together to complete a specific task.
 * 
 * You call the function by its name with parenthesiss
 * 
 */

// functsion ->
// 1. fucntion defination
// 2. function call

/***
 * Different kinds of function availble 
 * 1. Inbuilt funtion/pre defined function:
 * lenght exetend pop touppercase
 * 
 * 2. User defined funtion:
 * 
 * 
 * Syntax:
  funtion functionName(){
    //your code goes here..
  }
  
 */
//Very simple function:
  function greet(){
    console.log("Welcome")
  }
greet()

//Arguments/ parameters

function greeting(name){
    console.log("welcom",name)
}

// greeting("ram")
// greeting("shyaam")


function info(name="Guest",age=0){
    console.log("welcom",name,"and your age is ",age)
}
// info('ram',33)
// info()
// info("mohan",22)
// info()

// retured function:

function evenodd(n){
    if(n%2 ==0){
    console.log(n,"is even")
    }
    else{
        console.log(n,"is odd")
    }
}
function iseven(n){
    if(n%2 ==0){
    return true;
    }
    else{
       return false;
    }
}

evenodd(11)
iseven(54)
num = iseven(53)
if(num){
    console.log("great number")
}
console.log(num)

//arrow functions:

 mygreet = name =>console.log(name)


 power = x => x*x*x


mygreet("raja")
mygreet("mohan")
console.log(power(10))


// c()

function a(b,c){
    console.log("you are in a fun")
    console.log("value of b is ",b)
     c()

}

a(10, ()=>console.log("hi i am c fun"))

