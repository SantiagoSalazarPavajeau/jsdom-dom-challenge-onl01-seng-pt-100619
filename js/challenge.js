// recognize event
// callback function
// dom functions after load

// count
// use a count function inside of the setTimeout method, the count increases the number by one and the function calls itself afterwards
// setInterval function is defined in the global scope, and the function count is defined only with the add logic and seting the innertext, the seconds and html tag are defined outside the scope of the count function. the seconds are set as a 0 integer and setting seconds as value of the element creates a NAN
let seconds = 0;
let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementById('likes');


function count(){
    seconds += 1;
    counter.innerText = seconds;

}
document.addEventListener("DOMContentLoaded",(event) => {
    setInterval(count, 1000);
    
} );



