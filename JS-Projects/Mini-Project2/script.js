const mybutton = document.getElementById("button");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 10;
let randomnum ;
 mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomnum
 }