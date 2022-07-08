console.log("working")



// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     id: 'mapbox/streets-v11',
//     titleSize: 512,
//     zoomOffset: -1,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

//let marker=L.marker([34.0522, -118.2437]).addTo(map);
// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // L.geoJSON(sanFranAirport, {
// //     pointToLayer: function(feature, latlng) {
// //         console.log(feature);
// //         return L.marker(latlng)
// //         .bindPopup("<h2>" + feature.properties.name + "<h2><hr><h3>" + feature.properties.city + " ," + feature.properties.country +"</h3>");
// //     }
// // }).addTo(map);

// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer){
//         console.log(layer);
//         layer.bindPopup("<h2> Airport Code: "+ feature.properties.faa+"</h2><hr><h3> Airport Name: "+ feature.properties.name+"</h3");
//     }
// }).addTo(map);

// let cityData = cities

// cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         fillColor: "orange",
//         fillOpacity: .25,
//         lineWeight: 4
//     })
//     .bindPopup("<h2>"+ city.city + ", " + city.state + "</h2><hr><h3>" + city.population.toLocaleString() + "</h3")
//     .addTo(map);
// })

// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]

//   ];

// L.polyline(line, {
//     color: "blue",
//     opacity: .5,
//     stroke: true,
//     dashArray: 7,
//     lineWeight: 5
// }).addTo(map)

// We create the tile layer that will be the background of our map.
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    accessToken: API_KEY
});
var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});
var satellitemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
});
var nightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    accessToken: API_KEY
});
var outdoor = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});

let baseMaps = {
    Street: streets,
    Dark: darkmap,
    Satellite: satellitemap,
    Night: nightmap,
    Outdoor: outdoor
}
let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
})
L.control.layers(baseMaps).addTo(map)
let airportData = 'https://raw.githubusercontent.com/jnels4/mapping_earthquakes/main/majorAirports.json'
d3.json(airportData).then(function(data){
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2>Airport Code: "+ feature.properties.faa+"</h2><hr><h3>Airport Name: "+ feature.properties.name+"</h3>")
        }    }
        ).addTo(map)

})
// Then we add our 'graymap' tile layer to the map.
//outdoor.addTo(map);