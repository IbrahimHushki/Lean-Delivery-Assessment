export default async function submitContactInfo(inputs) {
  // Form data
  const formData = {};
  Object.entries(inputs).forEach(([key, value]) => {
    formData[key] = value;
  });

  const response = await fetch('/contact-form.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Failed to send contact info: HTTP status ${response.status}`);
  }
}
