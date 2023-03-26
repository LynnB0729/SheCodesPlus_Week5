let city = "Moscow";
let apiKey = "cff2aa1e3c91c0248805f01bed83e69c"; 
let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`

function checkWeather(response){
    console.log(response.data.name);
    console.log(response.data.main.temp);

    let roundedTemperature = Math.round(response.data.main.temp);

    let cityNameElement = document.querySelector("#cityName");
    cityNameElement.innerHTML = response.data.name;

    let currentTempElement = document.querySelector("#currentTemp")
    currentTempElement.innerHTML =  `${roundedTemperature}ºF`;
};

axios.get(`${weatherURL}&appid=${apiKey}`).then(checkWeather);







//let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=imperial&appid=cff2aa1e3c91c0248805f01bed83e69c" -- this may work as well? changed it to match video way, but was able to access data using this link -- too static maybe? 





//original BEFORE changing units to farenheit, imperial is the same as farenheit
//"https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cff2aa1e3c91c0248805f01bed83e69c&units=imperial"


//let apiKey = "cff2aa1e3c91c0248805f01bed83e69c"; 

//same as the 4th one, latLongURL but this one is for lisbon... the other is zocca& called by lat/lon

//let geoURL = "http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=cff2aa1e3c91c0248805f01bed83e69c"
//under geocoding API, looks like you can use it to translate the zip code to lat/lon??? 

//let getStartedURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=cff2aa1e3c91c0248805f01bed83e69c"

//let latLongURL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cff2aa1e3c91c0248805f01bed83e69c"
//same as the 1st one, weatherURL, but this one is for Zucca and the other is for Lisbon and this one is called by lat/lon and the other is called by city name 



