const searchInputEl = document.getElementById('search-input');
const searchBtnEl = document.getElementById("Search-btn");

const mainEl = document.getElementById('main');



// getWeather("mangalore")

function getWeather(value) {
  mainEl.innerHTML = ` <div class="spinner-container">
  <img src="spinner.svg"  class="spinner-img" alt="">
</div>`
  const searchInputValue = searchInputEl.value;

  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=f69943e3d45549fcafc44246231302&q=${value? value :searchInputValue}&aqi=no`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       mainEl.innerHTML = `      <div class="current-weather-paragraph-container">
       <h2 class="current-weather-h2 text-white">Current Weather</h2>
       <p class="current-date-time-paragraph text-gray-300">${data.current.last_updated}</p>
     </div>
     <div class="container">
       <div class="temperature-container flex  flex-col items-center">
         <p class="temperature-celsius  text-cyan-400 font-semibold">${data.current.temp_c}℃</p>
         <p class="text-gray-300 weather-condition">${data.current.condition.text}</p>
       </div>
       <div class="weather-info">
         <div class="location-info flex justify-between ">
           <div class="">
             <p class="text-gray-300  location-heading-par">City</p>
             <p class="location-detail-par">${data.location.name}</p>
           </div>
           <div class="">
             <p class="text-gray-300 location-heading-par">Region</p>
             <p class="location-detail-par">${data.location.region}</p>
           </div>
           <div class="">
             <p class="text-gray-300  location-heading-par">Country</p>
             <p class="location-detail-par">${data.location.country}</p>
           </div>
         </div>
         <div class="weather-details-container">
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">temp celsius</p>
             <p class="weather-detail-par">${data.current.temp_c}℃</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">temp fahrenheit </p>
             <p class="weather-detail-par">${data.current.temp_f}°F</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Wind</p>
             <p class="weather-detail-par">${data.current.wind_kph} km/h</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Humidity</p>
             <p class="weather-detail-par">${data.current.humidity}%</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Feels like</p>
             <p class="weather-detail-par">${data.current.feelslike_c}℃</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">UV index</p>
             <p class="weather-detail-par">${data.current.uv}</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Visibility</p>
             <p class="weather-detail-par">${data.current.vis_km} km</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Pressure</p>
             <p class="weather-detail-par">${data.current.pressure_mb} mb</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Wind degree</p>
             <p class="weather-detail-par">${data.current.wind_degree}°</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Wind direction</p>
             <p class="weather-detail-par">${data.current.wind_dir}</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Gust</p>
             <p class="weather-detail-par">${data.current.gust_kph} km</p>
           </div>
           <div class="">
             <p class="text-gray-300 leading-none weather-heading-par">Cloud cover</p>
             <p class="weather-detail-par ">${data.current.cloud}%</p>
           </div>
         </div>
       </div>
     </div>`
      })
      .catch((error)=>{
        mainEl.innerHTML = `  <p class="error-message">
        Something went wrong please try again <span class="text-amber-400 ml-2">⚠️</span>
      </p>`

      })
  } catch (error) {
    mainEl.innerHTML = `  <p class="error-message">
    Something went wrong please try again <span class="text-amber-400">⚠️</span>
  </p>`
  }
}

searchInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
searchBtnEl.addEventListener("click",()=>{
  getWeather()
});
