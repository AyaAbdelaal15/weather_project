let todayName = document.getElementById("todayName")
let todayMonth = document.getElementById("todayMonth")
let todayNumber = document.getElementById("todayDate")
let todayLocation = document.getElementById("todayLocation")
let todayTemp = document.getElementById("todayTemp")
let todayImg = document.getElementById("todayImg")
let todayWeather = document.getElementById("todayWeather")
let umbrella = document.getElementById("umbrella")
let wind = document.getElementById("wind")
let compass = document.getElementById("compass")



let tomorrow = document.getElementById("tomorrow") 
let tomorrowMaxTemp = document.getElementById("tomorrowMaxTemp") 
let tomorrowMinTemp = document.getElementById("tomorrowMinTemp") 
let tomorrowImg = document.getElementById("tomorrowImg") 
let tomorrowWeather = document.getElementById("tomorrowWeather") 


let afterTomorrow = document.getElementById("afterTomorrow")
let afterTomMaxTemp = document.getElementById("afterTomMaxTemp")
let afterTomMinTemp = document.getElementById("afterTomMinTemp")
let afterWeather = document.getElementById("afterWeather")


let search = document.getElementById("search")



async function getWeatherData(city){
   let weatherApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9cf1993fede14b16a41121640240907&q=${city}&days=3`)
   let weatherData = await weatherApi.json()
   return weatherData
}

search.addEventListener('input',function(){
    weatherApp(search.value)

})

function todayData(data){
    todayName.innerHTML=new Date(data.forecast.forecastday[0].date).toLocaleString('en-us',{weekday:'long'})
    todayNumber.innerHTML= new Date().getDate()
    todayMonth.innerHTML=new Date(data.forecast.forecastday[0].date).toLocaleString('en-us',{month:"short"})
    todayLocation.innerHTML = data.location.name
    todayTemp.innerHTML = data.current.temp_c
    // todayImg.setAttribute("src", data.current.condition.icon)
    todayWeather.innerHTML = data.current.condition.text
    umbrella.innerHTML = data.current.humidity + "%"
    wind.innerHTML = data.current.wind_kph + "km/h"
    compass.innerHTML = data.current.wind_dir
}

function tomorrowData(data){
    tomorrow.innerHTML = new Date(data.forecast.forecastday[1].date).toLocaleString('en-us',{weekday:'long'})
    // tomorrowImg.setAttribute("src", data.forecast.forecastday[1].day.condition.icon)
    tomorrowMaxTemp.innerHTML = data.forecast.forecastday[1].day.maxtemp_c
    tomorrowMinTemp.innerHTML= data.forecast.forecastday[1].day.mintemp_c
    tomorrowWeather.innerHTML = data.forecast.forecastday[1].day.condition.text
}  


function afterTomorrowData(data){
    afterTomorrow.innerHTML = new Date(data.forecast.forecastday[2].date).toLocaleString('en-us',{weekday:'long'})
    afterTomMaxTemp.innerHTML = data.forecast.forecastday[2].day.maxtemp_c
    afterTomMinTemp.innerHTML = data.forecast.forecastday[2].day.mintemp_c
    afterWeather.innerHTML = data.forecast.forecastday[2].day.condition.text
}

async function weatherApp(city="cairo"){
   let weatherData = await getWeatherData(city)
   todayData(weatherData)
   tomorrowData(weatherData)
   afterTomorrowData(weatherData)
}
weatherApp()