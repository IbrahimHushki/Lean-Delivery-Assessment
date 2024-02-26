export default async function getListItems() {
  const response = await fetch('https://main--lean-delivery-assessment--ibrahimhushki.hlx.live/to-do-form.json')
    .then(() => {
      if (!response.ok) {
        throw new Error('Response error');
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
}
