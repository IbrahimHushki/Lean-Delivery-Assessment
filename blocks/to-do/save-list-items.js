export default async function saveListItems(listItems, userId) {
  const dataObject = { data: { 'to-do': listItems, 'user-id': userId } };

  const response = await fetch('/to-do-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to send to do items: HTTP status ${response.status}`,
    );
  }
}
