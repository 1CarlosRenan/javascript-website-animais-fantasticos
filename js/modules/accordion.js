export default function initActiveAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
