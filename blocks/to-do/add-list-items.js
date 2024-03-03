export default function addListItem(inputValue, list, completed) {
  // Make sure input is not empty
  if (!inputValue) {
    return;
  }

  // Create elements
  const listItem = document.createElement('li');
  const listItemBtn = document.createElement('button');

  // Set attribute
  listItem.classList.add('to-do__list-item');
  // Default the "data-completed" attribute to false if it's undefined
  if (completed) {
    listItem.setAttribute('data-completed', completed);
  } else {
    listItem.setAttribute('data-completed', 'false');
  }

  // Change content
  listItem.textContent = inputValue;
  listItemBtn.innerHTML = '&#10006;';

  // Append children
  listItem.appendChild(listItemBtn);
  list.appendChild(listItem);
}
