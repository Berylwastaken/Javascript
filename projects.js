const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const counter =  document.getElementById('counter');
let count = 0;
let random;
const rngbtn = document.getElementById('rngbtn');
const rng = document.getElementById('rng');
let max = 100;
let min = 1;

increase.onclick = function(){
    count++;
    counter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}
decrease.onclick = function(){
    count--;
    counter.textContent = count;
}
rngbtn.onclick = function(){
   random = Math.floor(Math.random() * (max - min)) + min;
   rng.textContent = random;
}
