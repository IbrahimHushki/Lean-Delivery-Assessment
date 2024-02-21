export default function decorate(block) {
  const heroBody = block.firstElementChild.firstElementChild;
  const orderBtn = block.querySelector('p:nth-of-type(2)');

  heroBody.classList.add('hero__body');
  orderBtn.classList.add('order__button');
}
