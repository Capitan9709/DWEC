// W.7 -> 1

// // Calcular ruta
// var platform = new H.service.Platform({
//     'apikey': 'aMkWnwLaBQcGZFUcExNkP_YPG1UHZKys1mJKt4IgNhg'
//   });
//   // Retrieve the target element for the map:
//   var targetElement = document.getElementById('mapcontainer');
  
//   // Get the default map types from the platform object:
//   var defaultLayers = platform.createDefaultLayers();
//   function showPosition(miPos){
    
//     latitud = miPos.coords.latitude;
//     longitud = miPos.coords.longitude;
//         var map = new H.Map(
//             document.getElementById('mapcontainer'),
//             defaultLayers.vector.normal.map,
//             {
//               zoom: 10,
//               center: { lat: latitud, lng: longitud }
//             });
//   // Create the parameters for the routing request:
//     var routingParameters = {
//         'routingMode': 'fast',
//         'transportMode': 'car',
//         // The start point of the route:
//         'origin': latitud+","+longitud,
//         // The end point of the route:
//         'destination': '52.5309916298853,13.3846220493377',
//         // Include the route shape in the response
//         'return': 'polyline'
//     };

//     // Define a callback function to process the routing response:
//     var onResult = function(result) {
//         // ensure that at least one route was found
//         if (result.routes.length) {
//         result.routes[0].sections.forEach((section) => {
//             // Create a linestring to use as a point source for the route line
//             let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

//             // Create a polyline to display the route:
//             let routeLine = new H.map.Polyline(linestring, {
//                 style: { strokeColor: 'blue', lineWidth: 3 }
//             });

//             // Create a marker for the start point:
//             let startMarker = new H.map.Marker(section.departure.place.location);

//             // Create a marker for the end point:
//             let endMarker = new H.map.Marker(section.arrival.place.location);

//             // Add the route polyline and the two markers to the map:
//             map.addObjects([routeLine, startMarker, endMarker]);

//             // Set the map's viewport to make the whole route visible:
//             map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
//         });
//         }
//     };
    
//     // Get an instance of the routing service version 8:
//     var router = platform.getRoutingService(null, 8);

//     // Call calculateRoute() with the routing parameters,
//     // the callback and an error callback function (called if a
//     // communication error occurs):
//     router.calculateRoute(routingParameters, onResult,
//     function(error) {
//     alert(error.message);
//     });
// };

// function getPosition(){
//         return navigator.geolocation.getCurrentPosition(showPosition);
// }

// getPosition();
    
// -----------------------------------------------------------------------------
// Reverse Geocode

var platform = new H.service.Platform({
    'apikey': 'aMkWnwLaBQcGZFUcExNkP_YPG1UHZKys1mJKt4IgNhg'
  });
var defaultLayers = platform.createDefaultLayers();


function showPosition(miPos){
    latitud = miPos.coords.latitude;
    longitud = miPos.coords.longitude;
    var map = new H.Map(
        document.getElementById('mapcontainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: latitud, lng: longitud }
        });
        
    var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">L</text></svg>';
    
    var icon = new H.map.Icon(svgMarkup),
        coords = {lat: latitud, lng: longitud},
        marker = new H.map.Marker(coords, {icon: icon});
    
    map.addObject(marker);
    map.setCenter(coords);

    // Get an instance of the search service:
    var service = platform.getSearchService();

    // Call the reverse geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    service.reverseGeocode({
    at: latitud+","+longitud
    }, (result) => {
    result.items.forEach((item) => {
    // Assumption: ui is instantiated
    // Create an InfoBubble at the returned location with
    // the address as its contents:
    console.log(item.address.label);
  });
}, alert);
}

function error(){
    return "No se puede acceder a la ubicacion";
}

function getPosition(){
        return navigator.geolocation.getCurrentPosition(showPosition, error);
}

getPosition();



// -----------------------------------------------------------------------------
// API mapa HERE

// var platform = new H.service.Platform({
//     'apikey': 'aMkWnwLaBQcGZFUcExNkP_YPG1UHZKys1mJKt4IgNhg'
//   });

// var defaultLayers = platform.createDefaultLayers();


// function showPosition(miPos){
//     var map = new H.Map(
//         document.getElementById('mapcontainer'),
//         defaultLayers.vector.normal.map,
//         {
//           zoom: 15,
//           center: { lat: miPos.coords.latitude, lng: miPos.coords.longitude }
//         });
        
//     var svgMarkup = '<svg width="24" height="24" ' +
//         'xmlns="http://www.w3.org/2000/svg">' +
//         '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//         'height="22" /><text x="12" y="18" font-size="12pt" ' +
//         'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//         'fill="white">L</text></svg>';
    
//     var icon = new H.map.Icon(svgMarkup),
//         coords = {lat: miPos.coords.latitude, lng: miPos.coords.longitude},
//         marker = new H.map.Marker(coords, {icon: icon});
    
//     map.addObject(marker);
//     map.setCenter(coords);
// }

// function error(){
//     return "No se puede acceder a la ubicacion";
// }

// function getPosition(){
//         return navigator.geolocation.getCurrentPosition(showPosition, error);
// }

// getPosition();

// --------------------------------------------------------------------------------

// V1 - getPosition
// function showPosition(miPos){
//     document.write("Latitud: "+miPos.coords.latitude+"<br>");
//     document.write("Longitud: "+miPos.coords.longitude+"<br>");
// }

// function error(){
//     return "No se puede acceder a la ubicacion";
// }

// function getPosition(){
//         return navigator.geolocation.getCurrentPosition(showPosition, error);
// }

// document.write(getPosition());

// V2 - watchPosition
// function showPosition(miPos){
//     document.write("Latitud: "+miPos.coords.latitude+"<br>");
//     document.write("Longitud: "+miPos.coords.longitude+"<br>");
    
// }

// function error(){
//     return "No se puede acceder a la ubicacion";
// }

// function getPosition(){
//         return navigator.geolocation.watchPosition(showPosition, error);
// }

// document.write(getPosition());

// funcion calcular metros

// function getDistanceBetweenPoints(lat1, lng1, lat2, lng2){
//     // El radio del planeta tierra en metros.
//     let R = 6378137;
//     let dLat = degreesToRadians(lat2 - lat1);
//     let dLong = degreesToRadians(lng2 - lng1);
//     let a = Math.sin(dLat / 2)
//             *
//             Math.sin(dLat / 2) 
//             +
//             Math.cos(degreesToRadians(lat1)) 
//             * 
//             Math.cos(degreesToRadians(lat1)) 
//             *
//             Math.sin(dLong / 2) 
//             * 
//             Math.sin(dLong / 2);

//     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     let distance = R * c;

//     return distance;
// }

// var distanceInMeters = getDistanceBetweenPoints(
//     // lat1
//     getPosition,
//     // lng1
//     getPosition,
//     // lat2
//     getPosition,
//     // lng2
//     getPosition,
// );

// document.write(distanceInMeters())
