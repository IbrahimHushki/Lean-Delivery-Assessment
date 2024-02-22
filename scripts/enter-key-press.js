export default function handleEnterKeyPress(event, func) {
  // Check if the Enter key was pressed
  if (event.key === 'Enter') {
    func(event);
  }
}
