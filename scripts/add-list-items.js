export default function addListItem(event, input, list) {
  // Prevent button from scrolling up
  event.preventDefault();

  // Remove empty space from input
  const inputValue = input.value.trim();

  // Make sure input is not empty
  if (inputValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    list.appendChild(listItem);

    // Empty input after
    input.value = '';
  }
}
