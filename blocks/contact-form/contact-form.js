import submitContactInfo from './submit-contact-info.js';

// Selectors
const blockChildDivs = document.querySelectorAll('.contact-form > div');

export default function decorate(block) {
  // Create submit button
  const submitBtnDiv = document.createElement('div');
  const submitBtnLink = document.createElement('a');
  submitBtnLink.textContent = 'Submit';
  submitBtnDiv.classList.add('button-container');
  submitBtnLink.classList.add('contact-form__button');
  // Add submit button
  submitBtnDiv.appendChild(submitBtnLink);
  block.appendChild(submitBtnDiv);

  // Create input elements for each field
  blockChildDivs.forEach((div) => {
    const fieldName = div.textContent;

    // Add class name to each field
    if (fieldName.includes('title')) {
      div.classList.add('contact-form__title');
    } else {
      div.classList.add('contact-form__field');
    }

    // Check for field name and add a fitting input "type" attribute and assign variables
    let firstName;
    let lastName;
    let email;
    let birthDate;
    let termsOfService;
    // Add inputs with fitting "type" attributes to every field except for the title
    if (!fieldName.includes('title')) {
      // Create input element
      const input = document.createElement('input');

      if (fieldName.includes('name')) {
        input.setAttribute('type', 'text');
      }
      if (fieldName.includes('first name')) {
        firstName = input.textContent;
      }
      if (fieldName.includes('last name')) {
        lastName = input.textContent;
      }
      if (fieldName.includes('email')) {
        input.setAttribute('type', 'email');
        email = input.textContent;
      }
      if (fieldName.includes('date')) {
        input.setAttribute('type', 'date');
        birthDate = input.textContent;
      }
      if (fieldName.includes('terms of service')) {
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'contact-form__tos-input');
      }

      // Add the input to each field
      div.appendChild(input);
    }

    // Remove the first column element
    div.removeChild(div.firstElementChild);

    // Specify submitContactInfo arguments
    const submitInfo = (event) => {
      // To prevent the button from scrolling up when clicked
      if (event) {
        event.preventDefault();
      }
      submitContactInfo(firstName, lastName, email, birthDate, termsOfService);
    };

    // Add event listener
    if (!submitBtnDiv.getAttribute('has-event-listener')) {
      submitBtnDiv.addEventListener('click', submitInfo);
      submitBtnDiv.setAttribute('has-event-listener', 'true');
    }
  });
}
