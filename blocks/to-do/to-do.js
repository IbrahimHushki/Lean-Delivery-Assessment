import handleEnterKeyPress from '../../scripts/enter-key-press.js';
import addListItem from './add-list-items.js';
import getListItems from './get-list-items.js';
import deleteListItem from './delete-item.js';
import changeItemStaus from './change-item-status.js';
import saveListItems from './save-list-items.js';

// Selectors
let addBtn = document.querySelector('.to-do .button-container');
const blockChildDivs = document.querySelectorAll('.to-do > div');

// Create elements
const input = document.createElement('input');
const orderedList = document.createElement('ol');
const labelElement = document.createElement('label');
// Save items button
const saveItemsBtn = document.createElement('button');
saveItemsBtn.classList.add('button-container');
saveItemsBtn.classList.add('to-do__save-button');
saveItemsBtn.textContent = 'Save';

// Select divs based on content
let titleDiv;
let labelDiv;
let toDoInputAndBtn;

blockChildDivs.forEach((div) => {
  if (div.textContent.includes('title')) {
    titleDiv = div;
  }
  if (div.textContent.includes('label')) {
    labelDiv = div;
  }
  if (div.textContent.includes('button')) {
    toDoInputAndBtn = div;
  }
});

// If button doesn't exist in the content source
if (!addBtn) {
  // create elements
  const inputAndSubmitBtnDiv = document.createElement('div');
  const submitBtnLink = document.createElement('a');
  addBtn = document.createElement('div');

  // Add classes and attributes
  addBtn.classList.add('button-container');
  submitBtnLink.classList.add('button');
  submitBtnLink.setAttribute('title', 'Add');

  // Change content
  submitBtnLink.textContent = 'Submit';
  addBtn.appendChild(submitBtnLink);
  inputAndSubmitBtnDiv.appendChild(addBtn);
  toDoInputAndBtn = inputAndSubmitBtnDiv;
  document.querySelector('.to-do').appendChild(inputAndSubmitBtnDiv);
}

// Decorate block function
export default async function decorate(block) {
  // Remove divs in the first column
  blockChildDivs.forEach((div) => {
    div.removeChild(div.firstElementChild);
  });

  // Set attributes
  labelElement.setAttribute('for', 'to-do__input');
  labelElement.classList.add('to-do__label');
  toDoInputAndBtn.classList.add('to-do__input-and-btn');
  input.setAttribute('placeholder', 'Type here...');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'to-do__input');
  orderedList.classList.add('to-do__ordered-list');

  // Handle if title doesn't exist in the content source
  if (titleDiv) {
    titleDiv.classList.add('to-do__title');
  }

  // Handle error if label doesn't exist
  if (labelDiv) {
    labelDiv.replaceWith(labelElement);
    labelElement.textContent = labelDiv.textContent;
  }

  // Change content
  toDoInputAndBtn.appendChild(input);
  toDoInputAndBtn.appendChild(saveItemsBtn);
  block.appendChild(orderedList);

  // Fetch data asynchronously
  const data = await getListItems('to-do.js');

  // Loop through the data and add list items
  data.forEach((item) => {
    // Check for the "completed" value to set it as "data-completed" attribute
    const completed = item.completed === 'true';
    addListItem(item['to-do'], orderedList, completed);
  });

  // Specify addListItem function parameters
  const addToDo = (event) => {
    // To prevent the button from scrolling up when clicked
    if (event) {
      event.preventDefault();
    }
    addListItem(input.value.trim(), orderedList);
    input.value = '';
  };

  saveItemsBtn.addEventListener('click', async () => {
    const listItems = orderedList.querySelectorAll('li');
    let itemString = '';

    listItems.forEach((item) => {
      const text = item.textContent.trim().replace(/[\u2716]/g, '');
      const completed = item.getAttribute('data-completed');
      let status = completed;
      if (completed === 'undefined') {
        status = false;
      }
      itemString += `${text}: ${status}; `;
    });

    await saveListItems(itemString.trim());
    orderedList.innerHTML = '';
  });

  // Event listeners
  addBtn.addEventListener('click', addToDo);
  input.addEventListener('keypress', (event) => {
    handleEnterKeyPress(event, addToDo);
  });

  if (!orderedList.getAttribute('data-has-listener')) {
    orderedList.addEventListener('click', deleteListItem);
    orderedList.addEventListener('change', changeItemStaus);
    orderedList.setAttribute('data-has-listener', 'true');
  }
}
