function initMap() {
  // Координати місця на карті (наприклад, Київ)
  var myLatLng = { lat: 50.4501, lng: 30.5234 };
  // Створення об'єкта карти та відображення його в контейнері #map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, // Збільшення карти
    center: myLatLng // Центр карти
  });
  // Створення маркера на мапі
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Мій Позначка' // Текст під позначкою
  });
}