//init
const weather = new Weather('San Diego', 'USA');

// weather.changeLocation('beijing', 'China');

document.addEventListener('DOMContentLoaded', getWeather);



function getWeather() {
  const ui = new UI();
  weather.getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));

}
