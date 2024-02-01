const apiKey = 'api_here';
const btn = document.getElementById('btn');


btn.addEventListener('click',()=>{
    var city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data =>{
        const cityName = document.getElementById('cityName');
        const temp = document.getElementById('temp');
        const weather = document.getElementById('weather');

        cityName.textContent = data.name;
        temp.textContent = "Temperature : "+data.main.temp;
        weather.textContent = "Weather : "+data.weather[0].description;
    })
})
