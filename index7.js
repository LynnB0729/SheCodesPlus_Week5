//let apiKey = "cff2aa1e3c91c0248805f01bed83e69c"; 

//let geoLocationURL = "";

function showPosition(position) {
    console.log(position);
}

navigator.geolocation.getCurrentPosition(showPosition);