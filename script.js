let displayValue = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        display.value = result;
        displayValue = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    display.value = '';
}
