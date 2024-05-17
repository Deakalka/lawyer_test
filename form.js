document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну подію відправки форми

    // Отримуємо дані з форми
    var formData = new FormData(this);
    
    // Формуємо email-адресу та тему листа
    var mailtoLink = "mailto:aslangglol@gmail.com";
    var subject = "Нове повідомлення від клієнта: " + formData.get('name');

    // Формуємо тіло листа з даними з форми
    var body = "Ім'я: " + formData.get('name') + "\n" +
               "Email: " + formData.get('email') + "\n\n" +
               "Повідомлення:\n" + formData.get('message');

    // Побудова посилання для відправки листа
    var mailtoURL = mailtoLink + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Відкриваємо поштовий клієнт з заповненим листом
    window.location.href = mailtoURL;
});

// Відкриття модального вікна при натисканні на кнопку
document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("feedbackModal").style.display = "block";
    // centerModalContent(); // Центруємо вміст модального вікна
});

// Закриття модального вікна при натисканні на хрестик
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("feedbackModal").style.display = "none";
});

// Закриття модального вікна при кліканні на півпрозорий фон
window.onclick = function(event) {
    if (event.target == document.getElementById("feedbackModal")) {
        document.getElementById("feedbackModal").style.display = "none";
    }
};

// Закриття модального вікна при натисканні на клавішу Escape (Esc)
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("feedbackModal").style.display = "none";
    }
});

// Функція для центрування вмісту модального вікна
// function centerModalContent() {
//     var modalContent = document.querySelector(".modal-content");
//     var windowHeight = window.innerHeight;
//     var contentHeight = modalContent.offsetHeight;
//     var topMargin = (windowHeight - contentHeight) / 2;
//     modalContent.style.marginTop = topMargin + "px";
// }


