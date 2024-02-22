export default function addListItem(event, inputValue, list) {
  // Prevent button from scrolling up
  event.preventDefault();

  // Make sure input is not empty
  if (inputValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    list.appendChild(listItem);
  }
}
