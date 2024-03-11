import submitContactInfo from './submit-contact-info.js';

// Selector for field divs
const blockChildDivs = document.querySelectorAll('.contact-form > div');

export default function decorate(block) {
  // Create elements
  const form = document.createElement('form');
  const submitBtn = document.createElement('button');
  const successMessage = document.createElement('h4');
  const failMessage = document.createElement('h4');

  // Add classes to the submit button
  submitBtn.classList.add('button-container');
  submitBtn.classList.add('contact-form__button');
  successMessage.classList.add('contact-form__success-message');
  failMessage.classList.add('contact-form__failed-message');

  // Change content
  submitBtn.textContent = 'Submit';
  successMessage.textContent = 'Info Submitted';
  failMessage.textContent = 'Failed to Submit';
  block.appendChild(form);
  block.appendChild(submitBtn);

  const formInputs = form.elements;

  // Modify each field and add an "input" element
  blockChildDivs.forEach((div) => {
    // Field name selector
    const fieldNameColumn = div.firstElementChild;

    // Add class name to each field
    if (fieldNameColumn.textContent.includes('title')) {
      div.classList.add('contact-form__title');
    } else {
      div.classList.add('contact-form__field');
    }

    // Selectors
    const labelDiv = div.querySelector('div:nth-of-type(2)');
    const inputTypeColumn = div.querySelector('div:nth-of-type(3)');

    // Add inputs with fitting attributes to every field except for the title
    if (!fieldNameColumn.textContent.includes('title')) {
      // Create input element
      const input = document.createElement('input');
      const labelElement = document.createElement('label');

      // Change the label div into a label element and set a name attribute
      labelElement.textContent = labelDiv.textContent;
      labelElement.setAttribute('for', fieldNameColumn.textContent);
      labelDiv.replaceWith(labelElement);

      // Set the input type and name attributes
      input.setAttribute('type', inputTypeColumn.textContent);
      input.setAttribute('name', fieldNameColumn.textContent);
      input.setAttribute('required', true);

      // Set the value of "checkbox" type inputs
      if (inputTypeColumn.textContent === 'checkbox') {
        input.addEventListener('change', function changeValue() {
          input.value = this.checked ? 'true' : 'false';
        });
      }

      // Add the input to each field then append it to the form element
      div.appendChild(input);
      form.appendChild(div);
    }

    // Remove the first and last column elements (field name and input type columns)
    div.removeChild(fieldNameColumn);
    if (inputTypeColumn) {
      div.removeChild(inputTypeColumn);
    }
  });

  // Specify submitContactInfo arguments
  const submitInfo = async (event) => {
    // To prevent the button from scrolling up when clicked
    if (event) {
      event.preventDefault();
    }

    // Select invalid inputs
    const invalidInputs = [...formInputs].filter(
      (input) => !input.checkValidity(),
    );

    if (!form.checkValidity()) {
      // Set className for invalid inputs to highlight in red
      invalidInputs.forEach((input) => input.classList.add('required-invalid-input'));

      // Set message if info fails to send
      block.appendChild(failMessage);
      setTimeout(() => {
        block.removeChild(failMessage);
      }, 3000);
      return;
    }

    await submitContactInfo(formInputs);

    // Set success message
    block.appendChild(successMessage);
    setTimeout(() => {
      block.removeChild(successMessage);
    }, 3000);
    form.reset();
  };

  // Remove red border from inputs once they have values by removing the className
  form.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT') {
      const input = event.target;
      if (input.value.trim()) {
        input.classList.remove('required-invalid-input');
      }
    }
  });

  // Add event listener
  if (!submitBtn.getAttribute('has-event-listener')) {
    submitBtn.addEventListener('click', submitInfo);
    submitBtn.setAttribute('has-event-listener', 'true');
  }
}
