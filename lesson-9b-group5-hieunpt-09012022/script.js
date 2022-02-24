function min(a, b) {
    return (a > b) ? b : a;
}

const a = parseFloat(prompt("Enter first number: "));
const b = parseFloat(prompt("Enter second number: "));

alert(`The smaller number is ${min(a, b)}`);
document.getElementById("result-view").innerHTML = `The smaller number is ${min(a, b)}`;
console.log(`The smaller number is ${min(a, b)}`);