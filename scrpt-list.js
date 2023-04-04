var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');

let inputLength = () => input.value.length;

let listLength = () => item.length;

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

const addListAfterClick = e => {
    if(inputLength()>0) createListElement();
}

enterButton.addEventListener('click', addListAfterClick, false);