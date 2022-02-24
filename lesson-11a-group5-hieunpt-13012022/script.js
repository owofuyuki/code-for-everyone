/*
- Tạo một BUTTON ở file html
- Get BUTTON trong file js
- Đổi class name của BUTTON đó
- Gắn id cho BUTTON
*/

const myBtn = document.getElementsByClassName("button");

console.log(`Before change: class="${myBtn.className}"`);

myBtn.className = "myButtonClass";
myBtn.id = "myButtonId";

console.log(`After change: class="${myBtn.className}"`);
console.log(`After add: class="${myBtn.id}"`);