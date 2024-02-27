export default function addListItem(event, inputValue, list) {
  // Prevent button from scrolling up
  event.preventDefault();

  // Make sure input is not empty
  if (inputValue !== '') {
    // Create elements
    const listItemDiv = document.createElement('div');
    const listItem = document.createElement('li');
    const listItemBtn = document.createElement('button');

    // Set attribute
    listItemDiv.classList.add('to-do__list-item');

    listItem.textContent = inputValue;
    listItemBtn.innerHTML = '&#10006;';

    // Append children
    listItemDiv.appendChild(listItem);
    listItemDiv.appendChild(listItemBtn);
    list.appendChild(listItemDiv);

    // Delete item function
    const deleteListItem = () => {
      listItemDiv.remove();
    };

    // Add button event listener
    listItemBtn.addEventListener('click', deleteListItem);
  }
}
