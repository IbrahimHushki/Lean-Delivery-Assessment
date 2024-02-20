export default function decorate(block) {
  // Selectors
  const toDoAddDiv = document.querySelector('.to-do > div');
  const addBtn = document.querySelector('.to-do .button-container > a');

  // Create element
  const input = document.createElement('input');
//   const list = document.createElement('ol');
//   const listItem = document.createElement('')

  // Change content
  addBtn.textContent = 'Add to do';
  toDoAddDiv.appendChild(input);
}
