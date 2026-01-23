function change() {
let para = document.getElementById("msg");
let change = document.getElementById("text");
para.innerText = `${change.value}`;
para.style.color = "green";
let btn = document.getElementById("button");
btn.innerText = "Updated";
btn.style.backgroundColor = "Purple";
}