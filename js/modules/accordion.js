export default function initActiveAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    if (accordionList.length) {

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

