// recognize event
// callback function
// dom functions after load

// count
// use a count function inside of the setTimeout method, the count increases the number by one and the function calls itself afterwards

let seconds = 0;
let counter = document.getElementById('counter');
// add variables for button tags by id and call event listeners on these variables that contain the "buttons"

function count(){
    seconds += 1;
    counter.innerText = seconds;

}
document.addEventListener("DOMContentLoaded",(event) => {
    // setInterval function is defined in the global scope, and the function count is defined only with the add logic and seting the innertext, the seconds and html tag are defined outside the scope of the count function. the seconds are set as a 0 integer and setting seconds as value of the element creates a NAN
    let interval = setInterval(count, 1000);

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
    let heart = document.getElementById('heart');
    let likes = document.querySelector('ul');
    let likeComment = document.createElement('li')
    heart.addEventListener("click", function(e){
        likeComment.innerText = `I liked the ${seconds} second.`;
        likes.appendChild(comments);
    });    // add event listeners for heart appending comments to the likes list element and interpolating the seconds variable
    let pause = document.getElementById('pause');
    pause.addEventListener('click', function(e){
        clearInterval(interval);
    }) // add evlist to pause by calling the clearinterval after setting the set interval to a variable
    let form = document.getElementById("comment-form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        let text = document.getElementById("comment-input").value
        let comment = document.createElement("p")
        let div = document.getElementById("list")
        comment.innerText = text;
        div.appendChild(comment);
    }) // add evlist to the form element on the submit event and preventing default post request, obtaining the text using a get element by id on the input tag creating a p tag and inserting it to the list div element
    
} );



