export default function addListItem(inputValue, list, completed) {
  // Make sure input is not empty
  if (!inputValue) {
    return;
  }

  // Create elements
  const listItem = document.createElement('li');
  const listItemBtn = document.createElement('button');

  // Add class and attribute
  listItem.classList.add('to-do__list-item');
  listItem.setAttribute('data-completed', completed);

  // Change content
  listItem.textContent = inputValue;
  listItemBtn.innerHTML = '&#10006;';

  // Append children
  listItem.appendChild(listItemBtn);
  list.appendChild(listItem);
}