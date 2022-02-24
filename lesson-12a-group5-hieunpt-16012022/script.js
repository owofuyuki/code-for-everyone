function init () {
    const nope = document.querySelector(".nope");
    const button = document.querySelector(".change-my-life");
    const paragraph = document.querySelector(".status");

    button.onclick = function () {
        if (paragraph.innerHTML == "I'm poor") paragraph.innerHTML = "I got rich after learning programming at mindX";
        else paragraph.innerHTML = "Hehehe, I'm rich!";
    }

    nope.onclick = function () {
        if (confirm("Are you sure you don't want to change your life?")) {
            nope.innerHTML = "I am sorry";
        }
        else {
            alert("Think it again!");
        }
    }
}

window.addEventListener("load", init);