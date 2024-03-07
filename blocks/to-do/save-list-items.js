export default async function saveListItems() {
  const listItems = { data: { 'to-do': 'task 5' } };

  const response = await fetch('/to-do-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listItems),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to send to do items: HTTP status ${response.status}`,
    );
  }
}
