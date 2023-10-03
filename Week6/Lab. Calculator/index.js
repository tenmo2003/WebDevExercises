var currentInput = '0'; 
var prevInput = ''; 
var operator = ''; 

var justPressedOp = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.value = currentInput;
}

function pressNum(num) {
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    console.log(currentInput);
    justPressedOp = false;
    updateDisplay();
}

function operation(op) {
    if (prevInput !== '' && !justPressedOp) {
        equals();
    }
    if (!justPressedOp) {
        prevInput = currentInput;
        currentInput = '0';
    }
    operator = op;

    justPressedOp = true;
}

function equals() {
    switch (operator) {
        case '+':
            currentInput = (parseFloat(prevInput) + parseFloat(currentInput)).toString();
            break;
        case '-':
            currentInput = (parseFloat(prevInput) - parseFloat(currentInput)).toString();
            break;
        case '*':
            currentInput = (parseFloat(prevInput) * parseFloat(currentInput)).toString();
            break;
        case '/':
            if (parseFloat(currentInput) !== 0) {
                currentInput = (parseFloat(prevInput) / parseFloat(currentInput)).toString();
            } else {
                currentInput = 'Error';
            }
            break;
        default:
            break;
    }
    prevInput = '0';
    operator = '=';
    updateDisplay();
}

function clearValue() {
    currentInput = '0';
    updateDisplay();
}

function reset() {
    currentInput = '0';
    prevInput = '';
    operator = '';
    updateDisplay();
}

function decimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function negative() {
    if (currentInput !== '0') {
        currentInput = (-parseFloat(currentInput)).toString();
    }
    updateDisplay();
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

updateDisplay();
