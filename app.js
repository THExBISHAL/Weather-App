const apiKey = "e3f502e794604203aa1134652242912";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=e3f502e794604203aa1134652242912&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response  = await fetch(apiUrl + city);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c * 10)/10 + "°C";
  document.querySelector(".humidity").innerHTML = data.current.humidity + " %";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " Km/h";

  console.log(data.current.condition.text)
  if(data.current.condition.text == "Clear")
  {
    weatherIcon.src = "clear.png"
  }
  else if(data.current.condition.text == "Cloud")
  {
    weatherIcon.src = "clouds.png"
  }
  else if(data.current.condition.text == "Mist")
  {
    weatherIcon.src = "mist.png"
  }
  else if(data.current.condition.text == "Snow")
  {
    weatherIcon.src = "snow.png"
  }
  else if(data.current.condition.text == "Rain")
  {
    weatherIcon.src = "rain.png"
  }
  else if(data.current.condition.text == "Drizzle")
  {
    weatherIcon.src = "drizzle.png"
  }


}


searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
    searchBox.value = "";
  }
  
});
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
  searchBox.value = "";
})
