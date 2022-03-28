function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo')

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initActiveAccordion() {
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

initActiveAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"')

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave()

function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {

    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')

        }
      })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}

initAnimaScroll()
