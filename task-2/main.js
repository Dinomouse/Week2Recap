/*
In the task-2 index.html, there is a p tag (with an id of count) that displays a count. 
Ensure the count displays 0 when the page loads and then, using setInterval, 
have it increment by 1 every second.
*/

// Use the DOM to select the p tag and store it in a variable
// use a set interval function to make it increment every 1 second

let p = document.querySelector("#count");
let count = 0

let timer = setInterval(pInc, 1000)

function pInc(){
    count++;
    p.textContent = count;
    if(count>11){
        clearInterval(timer);
    } 
}





