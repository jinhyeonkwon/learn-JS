function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.apikey}&units=metric`
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:nth-child(2)");
    console.log(data);
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
    console.log(data.name, data.weather[0].main)
  }
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
