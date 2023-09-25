var currentInput = '0'; 
var prevInput = ''; 
var operator = ''; 

var justPressedOp = false;

const display = document.getElementById('ReadOut');

function updateDisplay() {
    display.value = currentInput;
}

function NumPressed(num) {
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    console.log(currentInput);
    justPressedOp = false;
    updateDisplay();
}

function Operation(op) {
    if (prevInput !== '' && !justPressedOp) {
        Equals();
    }
    if (!justPressedOp) {
        prevInput = currentInput;
        currentInput = '0';
    }
    operator = op;

    justPressedOp = true;
}

function Equals() {
    console.log('Before: ' + prevInput + ' ' + operator + ' ' + currentInput);
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
    console.log('After: ' + currentInput);
    prevInput = '0';
    operator = '=';
    updateDisplay();
}

function ClearEntry() {
    currentInput = '0';
    updateDisplay();
}

function Clear() {
    currentInput = '0';
    prevInput = '';
    operator = '';
    updateDisplay();
}

function Decimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function Neg() {
    if (currentInput !== '0') {
        currentInput = (-parseFloat(currentInput)).toString();
    }
    updateDisplay();
}

function Percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

updateDisplay();
