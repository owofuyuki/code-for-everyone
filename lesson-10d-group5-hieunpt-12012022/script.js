/*
Tạo một object mới có tên `family` và sử dụng Object `myFamily` như là prototype của object đó
*/

let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};

function showInfo(result, index) {
    document.getElementById(result).innerHTML = index;
    console.log(index);
}

let family = { };
family = myFamily;
family.location = "Hanoi, Vietnam";

showInfo("result-view", `My family has ${myFamily.quantity} people.`);
showInfo("result-prototype", `My family come from ${family.location}.`);
console.log(family);