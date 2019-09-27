//init storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

//init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// weather.changeLocation("El Cajon", "USA");

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);

  getWeather();

  $(locModal).modal('hide');

});


function getWeather() {
  const ui = new UI();
  weather.getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

function temperatureConverter(kelvin) {
  const celsius = kelvin - 273;
  let fahrenheit = Math.floor(celsius * (9/5) + 32);
  return fahrenheit;
}
