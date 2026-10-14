const date = document.getElementById('date');
const city = document.getElementById('city');
const iconTemp = document.getElementById('iconTemp');
const main = document.getElementById('main');
const temp = document.getElementById('temp');
const deg = document.getElementById('deg');
const speed = document.getElementById('speed');
const tempMin = document.getElementById('tempMin');
const tempMax = document.getElementById('tempMax');

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateNow = new Date();
let month = months[dateNow.getUTCMonth()];
let day = dateNow.getUTCDate();
let year = dateNow.getUTCFullYear();

date.innerHTML = `${day} ${month}, ${year}`;

async function loadWeather() {
        const cityName = document.getElementById('searchInput').value;

        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bf37ba0fb84c731478ed6fe7105a874a&units=metric`);
        
        const weatherInfo = await weather.json();
        console.log(weatherInfo)

        city.innerHTML = `${weatherInfo.name}`;
        temp.innerHTML = `${weatherInfo.main.temp}°C`;
        iconTemp.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" />`;
        main.innerHTML = `${weatherInfo.weather[0].main}`;
        deg.innerHTML = `${weatherInfo.wind.deg}°`;
        speed.innerHTML = `${weatherInfo.wind.speed} m/s`;
        tempMin.innerHTML = `${weatherInfo.main.temp_min}°C`;
        tempMax.innerHTML = `${weatherInfo.main.temp_max}°C`;
}