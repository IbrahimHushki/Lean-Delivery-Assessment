export default function decorate(block) {
  const heroBody = block.firstElementChild.firstElementChild;
  const orderBtn = block.querySelector('p:nth-of-type(2)');

  heroBody.classList.add('hero-body');
  orderBtn.setAttribute('id', 'order-button');
}
