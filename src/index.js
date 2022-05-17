let weather = {
    apiKey: "c70af4c7dac5177992c292da5cfe4686",
    fetchWeather: async function (city) {
       const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey);
       const weatherData = response.json();
       console.log(weatherData);

    },
    displayWeather: function(data) {

    }
};