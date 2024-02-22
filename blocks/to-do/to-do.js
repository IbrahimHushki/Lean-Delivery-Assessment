export default function decorate(block) {
  // Selectors
  const toDoAddDiv = document.querySelector('.to-do > div');
  const addBtn = document.querySelector('.to-do .button-container');

  // Create element
  const input = document.createElement('input');
  const orderedList = document.createElement('ol');

  // Change content
  input.setAttribute('placeholder', 'Type here...');
  toDoAddDiv.appendChild(input);
  block.appendChild(orderedList);

  // Functions
  // Add item function
  const addListItem = (event) => {
    // Prevent button from scrolling up
    event.preventDefault();

    const inputValue = input.value.trim();

    // Make sure input is not empty
    if (inputValue !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = inputValue;
      orderedList.appendChild(listItem);

      // Empty input after
      input.value = '';
    }
  };

  // Handle key press function
  const handleKeyPress = (event) => {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
      addListItem(event);
    }
  };

  // Call function
  addBtn.addEventListener('click', addListItem);
  input.addEventListener('keypress', handleKeyPress);
}
