const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

function closeMenu() {
  nav?.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  const icon = toggle?.querySelector('i');
  if (icon) {
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }
}

function openMenu() {
  nav?.classList.add('is-open');
  document.body.classList.add('nav-open');
  const icon = toggle?.querySelector('i');
  if (icon) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  }
}

if (toggle && nav) {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    nav.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('is-open')) return;
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
