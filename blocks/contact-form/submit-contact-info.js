export default async function submitContactInfo(inputs) {
  // Form data
  const formData = {};
  Object.entries(inputs).forEach(([key, value]) => {
    formData[key] = value.value;
  });

  const response = await fetch('/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: formData }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to send contact info: HTTP status ${response.status}`,
    );
  }
}
