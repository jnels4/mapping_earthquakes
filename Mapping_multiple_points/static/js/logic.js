console.log("working")

let map = L.map('mapid').setView([40.7,-94.5],4)

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     id: 'mapbox/streets-v11',
//     titleSize: 512,
//     zoomOffset: -1,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

//let marker=L.marker([34.0522, -118.2437]).addTo(map);

let cityData = cities

cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
        fillColor: "orange",
        fillOpacity: .25,
        lineWeight: 4
    })
    .bindPopup("<h2>"+ city.city + ", " + city.state + "</h2><hr><h3>" + city.population.toLocaleString() + "</h3")
    .addTo(map);
})



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     //id: 'mapbox/streets-v11',
//     accessToken: API_KEY
// });
var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
darkmap.addTo(map);