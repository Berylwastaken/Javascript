//variables
let x = 1;
let y = 'y';
let z = true;
let g = x * 2;
let TextBoxResult;
let n = '0';
let s = '0';
let b = '0';
const PI = 3.14159;
let radius;
let circumference;
const text3 = document.getElementById('text3');
const submit3 = document.getElementById('submit3');
const result = document.getElementById('result');
let number;

//user input
document.getElementById('submit').onclick = function(){
TextBoxResult = document.getElementById('text').value;
document.getElementById('header').textContent = `${TextBoxResult}`;
}
document.getElementById('submit2').onclick = function(){
    radius = document.getElementById('text2').value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('header2').textContent = circumference;
}
submit3.onclick = function(){
    
    number = text3.value;
    number = Number(number);

    if(number >= 100){
       result.textContent = 'Your number is too big';
    }
    else if(number == 0){
        result.textContent = 'Your number cant be 0';
    }
    else if(number >= 10){
        result.textContent = 'Your number is just right';
    }
    else if(number < 0){
        result.textContent = 'Your number cant be negative';
    }
    else{
        result.textContent = 'Your number is too small';
    }
    
}

//type conversion
n = Number(n);
s = String(s);
b = Boolean(b);

//math (for reference)
//x = x + 1; addition
//x = x - 1; subtraction
//x = x * 2; muliplication
//x = x / 2; division
//x = x ** 2; to the power of
//x = x % 3; modulus, shows the remainder of a division (in this case the division is by 3)
//x += 1; addition
//x -= 1; subtraction
//x *= 8; multiplication
//x /= 2; division
//x **= 2; to the power of
//x %= 3; modulus
//x ++; add one
//x --; subtract one
//z = Math.round(x); number rounded
//z = Math.floor(x); always rounds down
//z = Math.ceil(x); always rounds up
//z = Math.trunc(x); removes decimals from a number
//z = Math.pow(x,y); a variable to the power of another variable, in this case x to the power of t
//z = Math.sqrt(x); square root
//z = Math.log(x); natural logarithum of a number
//z = Math.sin(x); sine
//z = Math.cos(x); cosine
//z = Math.tan(x); tangent
//z = Math.abs(x); absolute value
//z = Math.sign(x); the sign of a number
//z = Math.max(y,x); displays the greater number in a set of values
//z = Math.min(y,x); dispkays the lesser number in a set of values

//console
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(g, typeof g);
console.log(n, typeof n);
console.log(s, typeof s);
console.log(b, typeof b);

//connecting with html elements
document.getElementById('p1').textContent = `x = ${x}`;
document.getElementById('p2').textContent = `y is ${y}`;
document.getElementById('p3').textContent = `z is ${z}`;
document.getElementById('p4').textContent = `g = ${g}`;
document.getElementById('p5').textContent = `n = ${n}`;
document.getElementById('p6').textContent = `s is ${s}`;
document.getElementById('p7').textContent = `b is ${b}`;
