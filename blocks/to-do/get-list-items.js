export default async function getListItems(fileName) {
  const response = await fetch('/to-do-form.json');
  if (!response.ok) {
    throw new Error(`Failed to fetch to-do items in the getListItems function in the ${fileName} file: HTTP status ${response.status}`);
  }
  const responseData = await response.json();
  return responseData.data;
}
