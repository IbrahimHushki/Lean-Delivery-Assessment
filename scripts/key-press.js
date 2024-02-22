export default function handleKeyPress(event, func, input) {
  // Check if the Enter key was pressed
  if (event.key === 'Enter') {
    func(event, input);
  }
}
