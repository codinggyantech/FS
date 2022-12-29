const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function getInput(i) {
    return new Promise(resolve => {
        rl.question(`Input #${i+1}: `, (input) => {
            resolve(+input);
        });
    });
}

let nums = [];

getInput(0).then(val => {
    nums.push(val);
    return getInput(1);
}).then(val => {
    nums.push(val);
    console.log(nums)
    /*
        rest of the program using those 2 inputs
    */
}).catch((err) => {
    console.log(err);
});