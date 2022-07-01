
let apikey ="81722a4d53194d5e5bc703cdf6d9b027" 

const button = document.querySelector("#predict")
const input = document.querySelector("#location")
const description = document.querySelector("#description")
const temperature = document.querySelector("#temperature")
const windspeed = document.querySelector("#wind")
const output = document.querySelector("#city")
const humidity = document.querySelector("#humidity")

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value +"&APPID=" +apikey)
   
    .then(response => response.json())
    .then(data=>{
        var name = data["name"]
        var describe = data["weather"]["0"]["description"]
        var temp = data["main"]["temp"]
        var windspeed = data["wind"]["speed"]
        var humid = data["main"]["humidity"]
        
        city.innerHTML=`<span>${name}<span>'s Weather`
        description.innerHTML = `Sky Conditions: <span>${describe}<span> `
        temperature.innerHTML = `Temperature: <span>${temp} Kelvin<span>`
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>`
        humidity.innerHTML = `Humidity: <span>${humid}<span>`

    })

    .catch(_error => alert("Oops! You entered a wrong location"))
    
})

