let input = document.querySelector("input");
let aside=document.querySelector(".aside");
input.addEventListener("keyup", (e) => {
    let inp_value = input.value;
  if (e.key === "Enter") {
    getCityWeather(inp_value);
    input.value="";
    input.focus();
  }
});
async function getCityWeather(city) {
  let api_key = "f51d58efa95513220943b03734f9de51";
  let base_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  let res = await window.fetch(base_api);
  res= await res.json();
  console.log(res);
  console.log(res.wind.speed);
  aside.innerHTML=` <h1 class="text-[50px] text-white uppercase underline underline-offset-[5px]">${res.name}</h1>
  <img class="w-[150px] h-[150px]" src="http://openweathermap.org/img/w/${res.weather[0].icon}.png" alt="img">
  <h2 class="text-[30px] font-bold text-white capitalize">Country:<span class="text-blue-600">${res.sys.country}</span></h2>
  <h2 class="text-[30px] font-bold text-white capitalize">Temp: <span class="text-blue-600">${Math.round(res.main.temp - 273.15)}</span><span class="text-blue-600" >&deg;C</span></h2>
  <h2 class="text-[30px] font-bold text-white capitalize">Humidity:<span class="text-blue-600">${res.main.humidity}%</span></h2>
  <h2 class="text-[30px] font-bold text-white capitalize">Pressure:<span class="text-blue-600">${res.main.pressure}mb</span></h2>
  <h2 class="text-[30px] font-bold text-white capitalize">Weather:<span class="text-blue-600">${res.weather[0].main}(${res.weather[0].description})</span></h2>
  <h2 class="text-[30px] font-bold text-white">Wind speed:<span class="text-blue-600">${res.wind.speed}km/h</span></h2>
  `
}






















