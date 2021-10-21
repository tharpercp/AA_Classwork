const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function absurdBubbleSortAsync (array, fnAsync, completionFunction) {
    let i = 0;
    let j = i + 1;
    function loopStep() {
        if (i >= array.length) {
            completionFunction();
            return;
        } 
        i++;
        j++;
        fnAsync(loopStep);
    }
    
}   

function compareTwoNumsAsync(el1, el2, callback) {
    reader.question(`is ${el1} larger than ${el2}? `, function (responseString){
        if (responseString.toLowerCase() === "yes") {
            callback(el2, el1);
        } else {
            callback(el1, el2);
        }
    })
}

let globalArray = [];

function compareTwoNumsAndSwapAsync(el1, el2, callback) {
    compareTwoNumsAsync(el1, el2, function (result) {
        console.log(`Sorted Array: ${result}`);
        callback();
    });
}

function outputResultandCloseReader() {
    console.log(`Finished Sorted Array: ${globalArray}`);
    reader.close();
}

let test = [1, 5, 3]
absurdBubbleSortAsync(test, compareTwoNumsAndSwapAsync, outputResultandCloseReader);

onst readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});