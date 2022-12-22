const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7f44a7f7cdmsh55e1cc84cab7fe8p13c913jsn419e62e8290d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWether = (add) => {
    cityName.innerHTML = add
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + add,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp1.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    max_temp1.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    
    wind_degrees.innerHTML = response.wind_degrees;
    wind_degrees1.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener('click',(e)=>{
   e.preventDefault()

    getWether(city.value)
})

getWether("Delhi")