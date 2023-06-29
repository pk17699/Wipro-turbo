function add(a, b){
    return a + b;
}
function substract(a, b){
    return a + b;
}
function multiply(a, b){
    return a + b;
}
function divide(a, b){
    return a + b;
}
function calculate(a, b, operand){
    if(a < 0 || b < 0){
        return "cant perform operation"
    }
    switch(operand){
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
            return "calculation is not possible";
    }
}
console.log(calculate(4, 5, '+'));
console.log(calculate(4, 5, '-'));
console.log(calculate(4, 5, '*'));
console.log(calculate(4, 5, '/'));
console.log(calculate(4, 5, '^'));