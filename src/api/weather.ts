const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string | { lat: number; lng: number }) => {
  console.log('city gegtting forom user ',typeof(city));
  
  let url = `${baseUrl}/weather?q=${city}&appid=129dd7918b4c85a3750d38b717354a1c`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=129dd7918b4c85a3750d38b717354a1c`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (city: string | { lat: number; lng: number }) => {
  // let url = `${baseUrl}forecast?lat=${city}&appid=129dd7918b4c85a3750d38b717354a1c`;
  let url = `${baseUrl}/forecast?lat=28.3514&lon=79.4393&appid=129dd7918b4c85a3750d38b717354a1c`;
  // if (typeof city === 'object') {
  //   url = `${baseUrl}/forecast/daily?lat=28.3514&lon=79.4393&appid=129dd7918b4c85a3750d38b717354a1c`;
  // }

  return await (await fetch(url)).json();
};
