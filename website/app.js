/* Global Variables */
const apiKey = "ca7ac655b2e15c8d34736322028a2e6f";
const openWeather = "https://api.openweathermap.org/data/2.5/weather?zip=";
const zip = document.querySelector("#zip").value;
const generate = document.querySelector("#generate")
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);



// start events 
generate.addEventListener("click", ()=>{
    const URL = `${openWeather}${zip}&appid=${apiKey}&units=metric`;
    console.log(URL);
})

