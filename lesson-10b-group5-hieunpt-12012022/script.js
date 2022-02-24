// Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó:
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};

function showInfo(result, index) {
    document.getElementById(result).innerHTML = index;
    console.log(index);
}

let indexName = person.name;
let indexJob = person.occupation;
let indexHobby = person["hobbies"];

showInfo("result-name", `Username is ${indexName}`);
showInfo("result-occupation", `User's occupation is ${indexJob}`);
showInfo("result-hobbies", `User's hobby: ${indexHobby}`);