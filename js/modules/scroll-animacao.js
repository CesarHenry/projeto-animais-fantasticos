export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade;
      if(sectionTop < 0) {
        section.classList.add('ativo');
      }
    })
  }
  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

