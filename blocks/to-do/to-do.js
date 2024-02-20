export default function decorate() {
  // Selectors
  const toDoAddDiv = document.querySelector('.to-do > div');
  const addBtn = document.querySelector('.to-do .button-container > a');

  // Create element
  const input = document.createElement('input');

  // Change content
  addBtn.textContent = 'Add to do';
  toDoAddDiv.appendChild(input);
}
