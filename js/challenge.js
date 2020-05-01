// recognize event
// callback function
// dom functions after load

// count
// use a count function inside of the setTimeout method, the count increases the number by one and the function calls itself afterwards

let seconds = 0;
let counter = document.getElementById('counter');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementById('likes');
// add variables for button tags by id and call event listeners on these variables that contain the "buttons"

function count(){
    seconds += 1;
    counter.innerText = seconds;

}
document.addEventListener("DOMContentLoaded",(event) => {
    // setInterval function is defined in the global scope, and the function count is defined only with the add logic and seting the innertext, the seconds and html tag are defined outside the scope of the count function. the seconds are set as a 0 integer and setting seconds as value of the element creates a NAN
    setInterval(count, 1000);
    let minus = document.getElementById('minus');
    minus.addEventListener("click", function(e){
        seconds -= 1; 
        counter.innerText = seconds;
        //add minus button event listener logic with minus equal 1 on minutes and a setter of the counter h1 tag of the innertext
    });
    let plus = document.getElementById('plus');
    plus.addEventListener("click", function(e){
        seconds += 1; 
        counter.innerText = seconds;
        //add plus button event listener logic with plus equal 1 on minutes and a setter of the counter h1 tag of the innertext
    });
    
} );



