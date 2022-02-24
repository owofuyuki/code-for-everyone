/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}
*/

/*
function checkAge(age) {
    return (age > 18) ? true : false;
}
*/

function checkAge(age) {
    return ((age > 18) || false);
}

const age = parseInt(prompt("Enter your age: "));

if (checkAge(age) === true) {
    document.getElementById("result-view").innerHTML = "You're welcome!";
    console.log("You're welcome!");
} else {
    confirm('Did parents allow you?');
    document.getElementById("result-view").innerHTML = "You're underage!";
    console.log("You're underage!");
}