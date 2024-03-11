export default async function saveListItems(listItems) {
  const dataObject = { data: { 'to-do': listItems } };

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
