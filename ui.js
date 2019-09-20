class UI {
  constructor() {
    this.name = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    // this.string = document.getElementById('w-string');
    // this.details = document.getElementById('w-location');
    // this.icon = document.getElementById('w-location');
    // this.humidty = document.getElementById('w-location');
    // this.feelsLike = document.getElementById('w-location');
    // this.dewpoint = document.getElementById('w-location');
    // this. = document.getElementById('w-location');
    // this.location = document.getElementById('w-location');
    // this.location = document.getElementById('w-location');

  }

  paint(weather){
    this.name.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
  }
}
