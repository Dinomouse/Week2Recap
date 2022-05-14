/*
On your HTML page, you will see an input field and an 'Add To List' button. 
Declare a new variable, importantThings, as an empty array. 
Using JavaScript, configure the website so that when you write something in the input field 
and click the Add To List button, a new item is added to the importantThings array.

👉 As well as adding the item to the in-memory array, 
now display each added item in an li element within the ordered list.


*/

let importantThings = [];

const listButton = document.querySelector("#add-to-list");
const inputField = document.querySelector("#important-thing");
const priorityField = document.querySelector("#priority")
const orderedList = document.querySelector("ol");
console.log(inputField);
listButton.addEventListener("click", (e)=> {
    const tempObject = {text: inputField.value, priority: Number(priorityField.value)};
    console.log(tempObject);
    importantThings.push(tempObject);
    console.log(importantThings)
    const  newListItem = document.createElement("li");
    newListItem.innerText = inputField.value + " " + priorityField.value
    orderedList.appendChild(newListItem);
    inputField.value = "";
    console.log(orderedList)
})

