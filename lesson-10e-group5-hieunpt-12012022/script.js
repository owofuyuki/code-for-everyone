/*
Thay đổi giá trị 6 bằng 606 bằng 2 cách
*/

let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

document.getElementById("result-before").innerHTML = `Before change: xyz = ${obj.bar[3].xyz}`;
console.log(`Before change: xyz = ${obj.bar[3].xyz}`);

// Cách 1
obj.bar[3].xyz = 606;

// Cách 2
obj["bar"][3]["xyz"] = 606;

document.getElementById("result-after").innerHTML = `After change: xyz = ${obj["bar"][3]["xyz"]}`;
console.log(`After change: xyz = ${obj["bar"][3]["xyz"]}`);