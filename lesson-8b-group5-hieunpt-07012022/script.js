const num = parseInt(prompt("Enter a positive number: "));
let isPrime = false;

if (num <= 0) {
    alert("ERROR! Only a positive number!");
    document.getElementById("result-view").innerHTML = "Checking failed!";
    console.log("Checking failed!");
}
else {
    if (num === 1) isPrime = false;
    else if (num === 2) isPrime = true;
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime === true) {
        alert(`${num} is a prime number.`);
        document.getElementById("result-view").innerHTML = `${num} is a prime number.`;
        console.log(num + "is a prime number.");
    }
    else {
        alert(`${num} is not a prime number.`);
        document.getElementById("result-view").innerHTML = `${num} is not a prime number.`;
        console.log(num + "is not a prime number.");
    }
}