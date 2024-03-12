export default function changeItemStaus(event) {
  const listItem = event.target.closest('li');
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    const completed = event.target.checked;
    let status;
    if (completed) {
      status = 'done';
    } else {
      status = 'open';
    }
    listItem.setAttribute('data-completed', status);
  }
}
