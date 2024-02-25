import handleEnterKeyPress from '../../scripts/enter-key-press.js';
import addListItem from './add-list-items.js';

// Selectors
const toDoInputAndBtn = document.querySelector('.to-do > div:last-of-type');
const label = document.querySelector('.to-do > div:nth-of-type(2)');
const addBtn = document.querySelector('.to-do .button-container');

// Create element
const input = document.createElement('input');
const orderedList = document.createElement('ol');
const labelElement = document.createElement('label');

// Decorate block function
export default function decorate(block) {
  // Set attributes
  input.setAttribute('placeholder', 'Type here...');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'to-do__input');
  labelElement.setAttribute('for', 'to-do__input');

  // Change content
  toDoInputAndBtn.appendChild(input);
  block.appendChild(orderedList);
  label.replaceWith(labelElement);
  labelElement.textContent = label.textContent;

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
