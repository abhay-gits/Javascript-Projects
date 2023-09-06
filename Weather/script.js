const apiKey = '3be7f6a2913ffc2b156312ac6b40718f';
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
        temp.textContent = data.main.temp;
        weather.textContent = data.weather[0].description;
    })
})