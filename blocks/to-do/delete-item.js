export default function deleteListItem(event) {
  if (event.target.matches('button')) {
    const parentListItem = event.target.parentElement;
    parentListItem.remove();
  }
}
