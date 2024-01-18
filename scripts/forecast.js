const key = '0Fv5nAZnXnFrIQ4QPRUcnWOVHSJGtM79';

// 1. getting the city code location
const getCity = async city => {
  const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0]; // zde je to prvni vysledek, ktery je asi nejpravdepodobnejsi
};

// 2. getting current weather
const getWeather = async id => {
  const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0]; // zde je to jeden objekt v array
};

// getCity('manchester')
//   .then(data => getWeather(data.Key))
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
