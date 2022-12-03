fetch('https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(function(resp){ return resp.json()})
.then(function(data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg";
    document.querySelector(".description ").textContent = "Weather: " + data.weather[0].main;
    document.querySelector(".pressure").textContent ="Pressure: " + data.main.pressure + " hPa";
    document.querySelector(".humidity").textContent ="Humidity: " + data.main.humidity;
    document.querySelector(".speed").textContent = "Wind speed: " + Math.round(data.wind.speed) + " km/h";
    document.querySelector(".deg").innerHTML ="Direction of the wind: " + data.wind.deg + " &deg" ;
    document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0][`icon`]}.png">`;

})
.catch(function(){

})