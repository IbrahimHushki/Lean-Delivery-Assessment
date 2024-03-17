export default function changeItemStaus(event) {
  const listItem = event.target.closest('li');
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    const completed = event.target.checked;
    const status = completed ? 'done' : 'open';
    listItem.setAttribute('data-completed', status);
  }
}
