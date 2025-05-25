const add = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

let firstNumber;
let secondNumber;
let operator;

const operate = (operator, firstNumber, secondNumber) => {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break;
        case '/':
            return divide(firstNumber, secondNumber);
            break;
        default:
            return 'wrong operator';
    }
}

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }    
    });
});

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            secondNumber = Number(display.textContent);
            const result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;
        } else {
            firstNumber = Number(display.textContent);
            operator = button.textContent;
            display.textContent = '';
        }
    })
});

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
})