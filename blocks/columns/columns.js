export default function decorate(block) {
  // Selectors for buttons
  const firstBtn = document.querySelectorAll(
    '.columns .button-container:nth-of-type(2)'
  );
  const secondBtn = document.querySelectorAll(
    '.columns .button-container:nth-of-type(3)'
  );

  // Add class to each to button container
  firstBtn.forEach((btn) => {
    btn.classList.add('first__button');
  });
  secondBtn.forEach((btn) => {
    btn.classList.add('second__button');
  });

  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
