export default async function getListItems() {
  const response = await fetch('/to-do-form.json');
  if (!response.ok) {
    throw new Error('Response error');
  }
  const responseData = await response.json();
  return responseData.data;
}
