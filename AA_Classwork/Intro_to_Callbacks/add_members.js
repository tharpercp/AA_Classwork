const { ftruncateSync } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});



function addNumbers(sum, numsLeft, completionCallback){
    let realSum = sum;
    let left = numsLeft;

    function loop(){
        if (left === 0){
            console.log(`Total Sum: ${realSum}`);
            completionCallback();
            return;
        }
        left -= 1;
        ftruncateSync(loop);
    }
    
    loop();
}


function addNumbersAsync(callback){
    rl.question("Yo, give me a number! ", function(numString){
        const num1 = parseInt(numString);
        realSum += num1;
        
        addNumbers(realSum, numsLeft, completionCallback);
    });

}

function addNumbersAndIncrementAsync(callback) {
    addNumbersAsync(function (result) {
      totalSum += result;
  
      console.log(`Sum: ${result}`);
      console.log(`Total Sum: ${totalSum}`);
  
      callback();
    });
}


function addNumbersCompletionCallback(){
    console.log("All done!");
    rl.close();
}

addNumbers(0, 3, addNumbersCompletionCallback);