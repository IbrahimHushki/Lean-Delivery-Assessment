export default function addListItem(inputValue, list) {
  // Make sure input is not empty
  if (!inputValue) {
    return;
  }

  // Create elements
  const listItem = document.createElement('li');
  const listItemBtn = document.createElement('button');

  // Set attribute
  listItem.classList.add('to-do__list-item');

  // Change content
  listItem.textContent = inputValue;
  listItemBtn.innerHTML = '&#10006;';

  // Append children
  listItem.appendChild(listItemBtn);
  list.appendChild(listItem);

  // Delete item function
  const deleteListItem = (event) => {
    if (event.target.matches('button')) {
      const parentListItem = event.target.parentElement;
      parentListItem.remove();
    }
  };

  // Add event listener
  list.addEventListener('click', deleteListItem);
}
