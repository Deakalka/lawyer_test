document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mob_menu');
  const menuLinks = document.querySelectorAll('.mob_menu .header-link');
  const menuSvg = document.querySelector('.mobile-menu-svg use');
  const scrollButton = document.querySelector('.scroll-to-top-btn');

  if (!menuButton || !mobileMenu || !menuSvg || !scrollButton) {
    console.error('Не вдалося знайти кнопку, меню або іконку.');
    return;
  }

  function openMenu() {
    mobileMenu.classList.add('visible');
    body.style.overflow = 'hidden';
    
    if (menuSvg.getAttribute('href') === './img/icons.svg#icon-mobile_menu') {
      menuSvg.setAttribute('href', './img/icons.svg#btn-icon-mob');
    } else {
      menuSvg.setAttribute('href', './img/icons.svg#icon-mobile_menu');
    }
  }

  function closeMenu() {
    mobileMenu.classList.remove('visible');
    body.style.overflow = 'auto';
  }

  menuButton.addEventListener('click', function() {
    if (mobileMenu.classList.contains('visible')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        closeMenu();

        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });

  window.addEventListener('scroll', function() {
    scrollButton.style.display = (window.pageYOffset > 100) ? 'block' : 'none';
  });

  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
