var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

let inputLength = () => input.value.length;

let listLength = () => item.length;

// Create a new list element 
const createListElement = () => {
    // Create element li
    var li = document.createElement('li'); 
    // Make text from input field in li 
    li.appendChild(document.createTextNode(input.value));
    // Add li to ul
    ul.appendChild(li);

    // Reset text input field
    input.value= '';



    // -- Toggle if done -- 
    const crossOut = e => {
        li.classList.toggle('done');
    }
    li.addEventListener('click', crossOut, false);
    // -- Toggle if done -- 


}

// Event handler if clicked or 'enter' is pressed
const addListEvent = e => {
    e.preventDefault();
    if(inputLength()>0) createListElement();
}

// Add item if button is clicked 
enterButton.addEventListener('click', addListEvent, false);
// Add item if enter is pressed 
document.querySelector('.inpForm').addEventListener('submit', addListEvent, false);