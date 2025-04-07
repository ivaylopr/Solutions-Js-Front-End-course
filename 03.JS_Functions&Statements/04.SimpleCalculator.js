function solve(firstValue, secondValue, operation) {
    let action = null;
    switch (operation) {
        case 'multiply':
            action = (a, b) => a * b;
            break;
        case 'divide':
            action = (a, b) => a / b;
            break;
        case 'add':
            action = (a, b) => a + b;
            break;
        case 'subtract':
            action = (a, b) => a - b;
            break;
    }
    const result = action(firstValue, secondValue);
    console.log(result);

}
