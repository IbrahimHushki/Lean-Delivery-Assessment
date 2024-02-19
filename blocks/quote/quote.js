export default function decorate(block) {
  // Selectors
  const quoteDiv = document.querySelector('.quote');
  const quoteBody = block.firstElementChild;
  const attribution = block.lastElementChild;

  // Create blockQuote semantic element
  const blockQuote = document.createElement('blockquote');
  const newQuoteBody = document.createElement('p');
  const newQuoteAttr = document.createElement('cite');

  // Add class names
  newQuoteBody.classList.add('quote-body');
  newQuoteAttr.classList.add('attribution', 'quote__attribution');

  // Replace default div element with blockQuote
  quoteDiv.replaceWith(blockQuote);
  blockQuote.appendChild(newQuoteBody);
  blockQuote.appendChild(newQuoteAttr);

  // Add quotation marks before and after the quote
  newQuoteBody.textContent = `"${quoteBody.textContent.trim()}"`;

  // Add "- " before attribution
  newQuoteAttr.textContent = `- ${attribution.textContent}`;
}
