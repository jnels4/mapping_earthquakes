console.log("working")

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
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satellitemap]
})
let myStyle = {
    color: "blue",
    fillColor: "#ffffa1",
    weight: 2
}
L.control.layers(baseMaps).addTo(map)

let airportData = 'https://raw.githubusercontent.com/jnels4/mapping_earthquakes/main/majorAirports.json';
let torontoData = 'https://raw.githubusercontent.com/jnels4/mapping_earthquakes/main/torontoRoutes.json';
let torontoHoods = 'https://raw.githubusercontent.com/jnels4/mapping_earthquakes/main/torontoNeighborhoods.json';

d3.json(torontoHoods).then(function(data){
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2>Neighborhod: " + feature.properties.AREA_NAME + "</h3>")
        }
    }).addTo(map);


})


// d3.json(airportData).then(function(data){
//     console.log(data);
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer){
//             layer.bindPopup("<h2>Airport Code: "+ feature.properties.faa+"</h2><hr><h3>Airport Name: "+ feature.properties.name+"</h3>")
//         }    }
//         ).addTo(map)

// })
// d3.json(torontoData).then(function(data){
    
//     console.log(data)
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature, layer){
//            layer.bindPopup("<h2>Airline: " +feature.properties.airline + "</h2><hr><h3>Destination: " + feature.properties.dst + "</h3>")
//         }
//     }).addTo(map)



// })

// L.polyline(data, {
//             color: "yellow",
//             opacity: .5,
//             lineWeight: 2
//         }).addTo(map)

// Then we add our 'graymap' tile layer to the map.
//outdoor.addTo(map);

