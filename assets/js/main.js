document.documentElement.classList.add('js-ready');

document.querySelectorAll('.nav').forEach((nav) => {
  const button = nav.querySelector('[data-nav-toggle]');
  const menu = nav.querySelector('.nav-links');

  if (!button || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
  };

  const openMenu = () => {
    menu.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close navigation menu');
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});

const yearNode = document.querySelector('[data-year]');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}
