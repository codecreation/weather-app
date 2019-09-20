class Weather {
  constructor(city, country) {
    this.apiKey = 'e453fa3b3266a63f18c855840ceba797';
    this.city = city;
    this.country = country;
  }

  //fetch weather api
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  //change location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}
