function returnTwo() {
    let num = 2;
    return num 
};

function greeting(name){
    return `Hello, ${name}.`
};

function add(num1,num2){
    return num1 + num2
};
function multiply(num1,num2){
    return num1 * num2
};

function subtract(num1,num2){
    return num1 - num2
};
function divide(num1,num2){
    return num1 / num2
};

module.exports= {
    returnTwo,
    greeting,
    add,
    multiply,
    subtract,
    divide
}

