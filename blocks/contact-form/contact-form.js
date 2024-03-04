import submitContactInfo from './submit-contact-info.js';

// Selector for field divs
const blockChildDivs = document.querySelectorAll('.contact-form > div');

export default function decorate(block) {
  // Create elements
  const form = document.createElement('form');
  const submitBtnDiv = document.createElement('div');
  const submitBtnLink = document.createElement('a');

  // Add classes to the submit button
  submitBtnDiv.classList.add('button-container');
  submitBtnLink.classList.add('contact-form__button');

  // Change content
  submitBtnLink.textContent = 'Submit';
  submitBtnDiv.appendChild(submitBtnLink);
  block.appendChild(form);
  block.appendChild(submitBtnDiv);

  const formElements = form.elements;

  // Modify each field and add an "input" element
  blockChildDivs.forEach((div) => {
    const fieldName = div.textContent;

    // Add class name to each field
    if (fieldName.includes('title')) {
      div.classList.add('contact-form__title');
    } else {
      div.classList.add('contact-form__field');
    }

    // Selectors
    const inputTypeColumn = div.querySelector('div:last-of-type');

    // Add inputs with fitting "type" attributes to every field except for the title
    if (!fieldName.includes('title')) {
      // Create input element
      const input = document.createElement('input');

      // Set the input type
      input.setAttribute('type', inputTypeColumn.textContent);

      // Add the input to each field then append it to the form element
      div.appendChild(input);
      form.appendChild(div);
    }

    // Remove the first and last column elements
    div.removeChild(div.firstElementChild);
    div.removeChild(inputTypeColumn);

    // Specify submitContactInfo arguments
    const submitInfo = (event) => {
      // To prevent the button from scrolling up when clicked
      if (event) {
        event.preventDefault();
      }
      submitContactInfo(formElements);
    };

    // Add event listener
    if (!submitBtnDiv.getAttribute('has-event-listener')) {
      submitBtnDiv.addEventListener('click', submitInfo);
      submitBtnDiv.setAttribute('has-event-listener', 'true');
    }
  });
}
