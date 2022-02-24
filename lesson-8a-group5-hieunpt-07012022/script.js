const operator = prompt("Enter operator ( either +, -, * or / ): ");

if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    let x = parseFloat(prompt("Enter number 1: "));
    let y = parseFloat(prompt("Enter number 2: "));
    let result;
    
    // a. Using if...else if... else
    if (operator === '+') result = x + y;
    else if (operator === '-') result = x - y;
    else if (operator === '*') result = x * y;
    else if (operator === '/') result = x / y;
    else {
        alert("Only add(+), subtract(-), multiply(*) or divide(/)!");
        document.getElementById("result-view").innerHTML = "Calculation failed!";
        console.log("Calculation failed!");
    }

    /*
    // b. Using switch case
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }
    */

    alert(`${x} ${operator} ${y} = ${result}`);
    document.getElementById("result-view").innerHTML = `The calculation is: ${x} ${operator} ${y} = ${result}`;
    console.log(`${x} ${operator} ${y} = ${result}`);
}
else {
    alert("Only add(+), subtract(-), multiply(*) or divide(/)!");
    document.getElementById("result-view").innerHTML = "Calculation failed!";
    console.log("Calculation failed!");
}