const API_KEY = "6de593eb41327ec3ca7f5fc9f4f6a57d";

function onGetOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather .js-weather");
            const city = document.querySelector("#weather .js-name");
            weather.innerText = data.weather[0].main;
            city.innerText = data.name;

        });
}

function onGeoError() {
    alert("Can't find location");
}


navigator.geolocation.getCurrentPosition(onGetOk, onGeoError);