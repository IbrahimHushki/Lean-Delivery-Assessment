export default async function getListItems(fileName) {
  const response = await fetch('/to-do-form.json');

  if (!response.ok) {
    throw new Error(
      `Failed to fetch to-do items in the getListItems function in the ${fileName} file: HTTP status ${response.status}`,
    );
  }
  const responseData = await response.json();
  const dataArray = responseData.data;

  // Convert single string data into objects for rendering
  const data = dataArray.flatMap((item) => {
    const taskString = item['to-do'];
    const tasks = taskString
      .split(';')
      .map((task) => task.trim())
      .filter((task) => task !== '');
    return tasks.map((task) => {
      const [taskName, status] = task.split(':').map((part) => part.trim());
      return {
        'to-do': taskName,
        completed: status,
      };
    });
  });

  return data;
}
