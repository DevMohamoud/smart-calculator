let currentSum = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (Number.isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch(symbol) {
        case "AC":
            buffer = "0";
            currentSum = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = currentSum;
            currentSum = 0;
            break;
        case "±":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.toString(0, buffer.length-1);
            }
            break;
        case '÷':
        case '×':
        case '−':
        case '+':
        case '=':
            handleMath(symbol) 
                break;
    }
}