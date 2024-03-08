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

