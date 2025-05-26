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
        const value = button.textContent;

        if(value === '.' && display.textContent.includes('.')) return;

        if (display.textContent === '0' && value !== '.') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }    
    });
});

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            if (operator === undefined || firstNumber === undefined) return;
            secondNumber = Number(display.textContent);
            const result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
            operator = undefined;
            secondNumber = undefined;
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
});

const backspace = document.querySelector('#backspace');

backspace.addEventListener('click', () => {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
});

const percentButton = document.querySelector('#percent');

percentButton.addEventListener('click', () => {
    const currentValue = Number(display.textContent);
    display.textContent = currentValue / 100;
});

const signButton = document.querySelector('#sign');

signButton.addEventListener('click', () => {
    const currentValue = Number(display.textContent);
    display.textContent = (currentValue * -1).toString();
})