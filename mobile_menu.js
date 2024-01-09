document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mob_menu');
  const menuLinks = document.querySelectorAll('.mob_menu .header-link');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('visible');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          mobileMenu.classList.remove('visible');

          setTimeout(() => {
            targetSection.scrollIntoView({
              behavior: 'smooth'
            });
          }, 300); // Час збігається з часом анімації в CSS (0.3s * 1000 = 300ms)
        }
      });
    });
  } else {
    console.error('Не вдалося знайти кнопку або меню.');
  }
});
  

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-button');
  const menuSvg = document.querySelector('.mobile-menu-svg use');

  menuButton.addEventListener('click', function() {
    if (menuSvg.getAttribute('href') === './img/icons.svg#icon-mobile_menu') {
      menuSvg.setAttribute('href', './img/icons.svg#btn-icon-mob'); // Замініть шлях на вашу нову SVG іконку
    } else {
      menuSvg.setAttribute('href', './img/icons.svg#icon-mobile_menu'); // Повернення до початкової іконки
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.header-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});



// ======== 


const scrollButton = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) { // Відстань, після якої кнопка з'являється
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

scrollButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
