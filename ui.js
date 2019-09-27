class UI {
  constructor() {
    this.name = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.main = document.getElementById('w-string');
    // this.details = document.getElementById('w-location');
    // this.icon = document.getElementById('w-location');
    this.humidity = document.getElementById('w-humidity');
    // this.feelsLike = document.getElementById('w-location');
    // this.dewpoint = document.getElementById('w-location');
     this.wind = document.getElementById('w-wind');
    // this.location = document.getElementById('w-location');
    // this.location = document.getElementById('w-location');

  }


  paint(weather){
    this.name.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.main.textContent = temperatureConverter(weather.main.temp);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
  }
}
