// recognize event
// callback function
// dom functions after load

// count
// use a count function inside of the setTimeout method, the count increases the number by one and the function calls itself afterwards

let seconds = 0;
let counter = document.getElementById('counter');


function count(){
    seconds += 1;
    counter.innerText = seconds;

}

let interval = setInterval(count, 1000);



