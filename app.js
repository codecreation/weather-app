//init
const weather = new Weather('San Diego', 'USA');

weather.getWeather()
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));
