import handleEnterKeyPress from '../../scripts/enter-key-press.js';
import addListItem from './add-list-items.js';

// Selectors
const toDoAddDiv = document.querySelector('.to-do > div');
const addBtn = document.querySelector('.to-do .button-container');

// Create element
const input = document.createElement('input');
const orderedList = document.createElement('ol');

// Decorate block function
export default function decorate(block) {
  // Change content
  input.setAttribute('placeholder', 'Type here...');
  toDoAddDiv.appendChild(input);
  block.appendChild(orderedList);

  // Specify addListItem function parameters
  const addToDo = (event) => {
    addListItem(event, input.value.trim(), orderedList);
    input.value = '';
  };

  // Event listeners
  addBtn.addEventListener('click', addToDo);
  input.addEventListener('keypress', (event) => {
    handleEnterKeyPress(event, addToDo);
  });
}
