function checkSpace(input) {
    let check = 0;
    for (let i = 0; i < input.length; i++) {
        check += (input[i] !== ' ') ? 1 : 0;
    }
    return (check === 0) ? true : false;
}

function checkLogin(username) {
    if (username === "Admin") {
        let password = prompt("Enter your password: ");
        if (password === "mindX") {
            alert("Your're welcome!");
            document.getElementById("result-view").innerHTML = "Your're welcome!";
            console.log("Admin Account...");
        } else if (checkSpace(password) === true) {
            alert("Canceled!");
            document.getElementById("result-view").innerHTML = "Canceled!";
            console.log("Canceled...");
        } else {
            alert("Wrong password!");
            document.getElementById("result-view").innerHTML = "Canceled!";
            console.log("Wrong password...");
        }
    } else if (checkSpace(username) === true) {
        alert("Canceled!");
        document.getElementById("result-view").innerHTML = "Canceled!";
        console.log("Canceled...");
    } else {
        alert("I don't know you!");
        document.getElementById("result-view").innerHTML = "Unknown Account";
        console.log("Unknown Account...");
    }
}


let username = prompt("Enter your username: ");
checkLogin(username); 