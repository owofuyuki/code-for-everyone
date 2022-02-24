/*
Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
- có sử dụng Object.key()
- có sử dụng các method của array
- Có sử dụng toUpperCase()
*/

let obj = {
    b: 2,
    a: 1,
    c: 3,
};

// TODO
// OUTPUT is [B, A, C]

let newArray = Object.keys(obj).toString().toUpperCase().split(',');

document.getElementById("result-view").innerHTML = newArray;
console.log(newArray);