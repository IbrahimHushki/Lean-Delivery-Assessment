export default function submitContactInfo(inputs) {
  // Extracting values from input fields
  const firstName = inputs[0].value;
  const lastName = inputs[1].value;
  const email = inputs[2].value;
  const dateOfBirth = inputs[3].value;
  const agreeToTos = inputs[4].checked;

  // Form data
  const formData = {
    data: {
      'first-name': firstName,
      'last-name': lastName,
      'email': email,
      'date-of-birth': dateOfBirth,
      'agree-to-tos': agreeToTos,
    },
  };

  fetch(
    '/contact-form.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  )
    .then((response) => {
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
