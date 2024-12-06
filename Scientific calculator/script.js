function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace(/\^/g, '**')); // Replace ^ with ** for exponentiation
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
