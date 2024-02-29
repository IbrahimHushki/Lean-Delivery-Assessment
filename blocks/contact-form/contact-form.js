// Selectors
const blockChildDivs = document.querySelectorAll('.contact-form > div');

export default function decorate(block) {
  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('contact-form__button');
  // Add submit button
  block.appendChild(submitBtn);

  // Create input elements for each field
  blockChildDivs.forEach((div) => {
    const fieldName = div.textContent;

    // Add class name to each field
    if (fieldName.includes('title')) {
      div.classList.add('contact-form__title');
    } else {
      div.classList.add('contact-form__field');
    }

    // Add inputs with fitting "type" attributes to every field except for the title
    if (!fieldName.includes('title')) {
      // Create input element
      const input = document.createElement('input');

      // Check for field name and add a fitting input "type" attribute
      if (fieldName.includes('name')) {
        input.setAttribute('type', 'text');
      }
      if (fieldName.includes('email')) {
        input.setAttribute('type', 'email');
      }
      if (fieldName.includes('terms of service')) {
        input.setAttribute('type', 'checkbox');
      }
      if (fieldName.includes('date')) {
        input.setAttribute('type', 'date');
      }

      // Add the input
      div.appendChild(input);
    }

    // Remove the first column element
    div.removeChild(div.firstElementChild);
  });
}
