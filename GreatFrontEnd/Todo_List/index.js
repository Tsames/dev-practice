import './styles.css';

/* You're given some existing HTML for a Todo List app. Add the following functionality to the app:

1. Add new tasks on clicking the "Submit" button.
  The < input > field should be cleared upon successful addition.
2. Remove tasks from the Todo List upon clicking the "Delete" button.  */


// Write your JavaScript here.

//Select Relevant Elements from the DOM
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//Callback Functions
const createTodo = () => {

  if (input.value !== "") {

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerHTML = input.value + " ";
    button.innerHTML = "Delete"
    // button.addEventListener("click", deleteTodo);

    li.append(span, button);
    ul.append(li);

    input.value = ""

  }

}

const deleteTodo = (Event) => {

  if (Event.target.tagName === "BUTTON" && Event.target.innerHTML === "Delete") {

    const parentLi = Event.target.parentElement;
    parentLi.remove();

  }

}

//Event Listeners
button.addEventListener("click", createTodo);
document.addEventListener("click", deleteTodo)