document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const text = document.querySelector(".text-section");
    const textSecond = document.querySelector(".text-section-second");

    function fadeInSections() {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add("show");
            }, index * 500); // Затримка кожної секції на 500 мілісекунд
        });
    }

    fadeInSections();

    // Ваш код для з'явлення text та textSecond після завершення анімації секцій
    setTimeout(() => {
        text.classList.add("show");
        textSecond.classList.add("show");
    }, sections.length * 300);
});



// document.addEventListener("DOMContentLoaded", function () {
//     // Отримуємо всі посилання, які вказують на секції
//     const links = document.querySelectorAll('a[href^="#"]');

//     // Додаємо обробник події для кожного посилання
//     links.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Забороняємо стандартну поведінку посилання

//             const targetId = this.getAttribute("href").substring(1); // Отримуємо ідентифікатор цільової секції
//             const targetSection = document.getElementById(targetId); // Знаходимо цільову секцію

//             if (targetSection) {
//                 // Викликаємо функцію плавного скролінгу
//                 scrollToSection(targetSection);
//             }
//         });
//     });

//     // Функція для плавного скролінгу до елементу
//     function scrollToSection(targetElement) {
//         const offsetTop = targetElement.offsetTop; // Отримуємо вертикальну позицію елементу відносно верхнього краю

//         window.scrollTo({
//             top: offsetTop,
//             behavior: "smooth" // Встановлюємо плавний ефект прокрутки
//         });
//     }
// });
