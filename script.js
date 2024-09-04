const apiKey = "b08625c816eaa8df6b2ec99042d11a4e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (data.cod == '404'){
        alert('City does not found')
        return checkweather('Karachi');
    }

    if (searchBox.value === 'undefined') {
        return checkweather('Karachi')
    }
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity-text').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind-speed').innerHTML = data.wind.speed + 'km/h';

    // Update weather images according to his condition
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main == "Clear") {
        weatherIcon.src = 'images/clear.png'
    }else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = 'images/drizzle.png'
    }else if(data.weather[0].main == "Mist") {
        weatherIcon.src = 'images/mist.png'
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src = 'images/rain.png'
    }else if(data.weather[0].main == "Snow") {
        weatherIcon.src = 'images/snow.png'
    }else if(data.weather[0].main == "Smoke") {
        weatherIcon.src = 'images/smoke.png'
    }

}

// eventlisner for input button
searchBtn.addEventListener('click', () => {
    let city = searchBox.value.trim();  // Get the value from the input and trim any extra spaces

    // If the input is empty, use "Karachi" as the default city
    if (city === "") {
        city = "Karachi";
    }

    checkweather(city);
});

// Optionally, you can call checkweather('Karachi') when the page loads to display Karachi's weather by default
checkweather('Karachi');
    



